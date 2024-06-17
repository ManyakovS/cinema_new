import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'

import { PrismaService } from '@/shared/modules/prisma/prisma.service'
import { Prisma, Ticket, TicketStatus } from '@prisma/client'

// filter
import { filterBuilder } from '@/utils/filter/filter.builder'
import {
  BookTicketsDTO,
  CreateTicketDto,
  GetTicketsParamsDTO,
  TicketStatusEnum,
} from './dto/ticket.dto'
import { removeNesting } from '@/utils/nesting/remove-nesting'

// Tasks
import { SchedulerRegistry } from '@nestjs/schedule'

// Bull
import { InjectQueue } from '@nestjs/bull'
import { Queue } from 'bull'

// Notifications
import { NotificationsService } from '../notifications/notifications.service'
import {
  CreateNotification,
  NotificationType,
} from '../notifications/dto/notifications.dto'
import { EmailService } from '../email/email.service'
import { getTicketBuyEmailMessage } from './utils/get-ticket-email-message'
import { UserService } from '../user/user.service'

@Injectable()
export class TicketService {
  constructor(
    @InjectQueue('tickets') private readonly ticketsQueue: Queue,
    private prismaService: PrismaService,
    private readonly schedulerRegistry: SchedulerRegistry,
    private readonly notificationsService: NotificationsService,
    private readonly emailService: EmailService,
    private readonly userService: UserService,
  ) {}

  async findAll(params: GetTicketsParamsDTO) {
    const tickets = await this.findByFilter(params)
    return removeNesting(tickets) as typeof tickets
  }

  async findAllByUser(userId: number, filmId: number) {
    if (!userId || !filmId) throw new NotFoundException()

    const tickets = await this.prismaService.ticket.findMany({
      where: {
        UserTicket: {
          some: {
            userId,
            filmId,
          },
        },
      },
      select: this.ticketResourceIncludeBuilder(),
    })
    return removeNesting(tickets) as typeof tickets
  }

  async findByIds(ids: number[]) {
    const tickets = await this.findManyById(ids)
    return tickets
  }

  async findById(id: number) {
    const ticket = await this.prismaService.ticket.findFirst({
      select: this.ticketResourceIncludeBuilder(),
      where: {
        id,
      },
    })

    return removeNesting(ticket) as typeof ticket
  }

  async create(createDto: CreateTicketDto) {
    const ticket = await this.prismaService.ticket.create({
      select: this.ticketResourceIncludeBuilder(),
      data: {
        ...createDto,
      },
    })

    return removeNesting(ticket) as typeof ticket
  }

  async cancelBookedTicket(tickets: BookTicketsDTO) {
    const _tickets = await this.findManyById(tickets.ticketsIds)

    if (_tickets.length !== tickets.ticketsIds.length)
      throw new NotFoundException()

    if (_tickets.some((t) => t.status !== TicketStatusEnum.RESERVATED))
      throw new BadRequestException('Билеты не в том статусе')

    try {
      await Promise.all(
        _tickets.map(async (ticket) => {
          await this.prismaService.$transaction(async (prisma) => {
            return await prisma.userTicket.delete({
              where: {
                userId_ticketId: {
                  userId: tickets.userId,
                  ticketId: ticket.id,
                },
              },
            })
          })

          return await this.prismaService.$transaction(async (prisma) => {
            const userFilm = await prisma.userFilm.findFirst({
              where: {
                filmId: ticket.session.film.id,
                userId: tickets.userId,
                status: {
                  equals: TicketStatusEnum.RESERVATED,
                },
              },
              include: {
                userTickets: true,
              },
            })

            if (userFilm?.userTickets && !userFilm.userTickets.length) {
              await prisma.userFilm.delete({
                where: {
                  filmId_userId: {
                    filmId: ticket.session.film.id,
                    userId: tickets.userId,
                  },
                },
              })
            }

            return await this.changeTicketStatus(
              ticket.id,
              TicketStatusEnum.AVAILABLE,
            )
          })
        }),
      )

      return _tickets
    } catch (error) {
      return error
    }
  }

  async bookedTicket(tickets: BookTicketsDTO) {
    let _tickets = await this.findManyById(tickets.ticketsIds)

    if (_tickets.length !== tickets.ticketsIds.length)
      throw new NotFoundException()

    if (_tickets.some((t) => t.status !== TicketStatusEnum.AVAILABLE))
      throw new BadRequestException('Билеты не в том статусе')

    return await this.prismaService.$transaction(async (prisma) => {
      try {
        _tickets = await Promise.all(
          _tickets.map(async (ticket) => {
            /* TODO: Вынести в отдельный метол. И наверное сервис. С поиском по id и фильтрами */
            const userFilm = await prisma.userFilm.findFirst({
              where: {
                filmId: ticket.session.film.id,
                userId: tickets.userId,
              },
            })
            if (!userFilm)
              await prisma.userFilm.create({
                data: {
                  filmId: ticket.session.film.id,
                  userId: tickets.userId,
                  notification: false,
                  status: TicketStatusEnum.RESERVATED,
                },
              })
            /* :TODO */

            ticket = await prisma.ticket.update({
              where: {
                id: ticket.id,
              },
              data: {
                status: TicketStatusEnum.RESERVATED,
                /* TODO: Вынести в отдельный метол. И наверное сервис. С поиском по id и фильтрами */
                UserTicket: {
                  create: {
                    userId: tickets.userId,
                    filmId: ticket.session.film.id,
                    status: TicketStatusEnum.RESERVATED,
                  },
                },
              },
              select: this.ticketResourceIncludeBuilder(),
            })

            return ticket
          }),
        )
      } catch (error) {
        return error
      }

      try {
        await Promise.all(
          _tickets.map(async (ticket) => {
            // Добавляем задание в очередь с отложенным временем выполнения (10 минут)
            await this.ticketsQueue.add(
              'check-payment',
              { ticketId: ticket.id, userId: tickets.userId },
              { delay: 600000 }, // 10 minutes in milliseconds
            )
          }),
        )
      } catch (error) {
        return error
      }

      return _tickets
    })
  }

  async buyTicket(tickets: BookTicketsDTO) {
    return await this.prismaService.$transaction(async (prisma) => {
      const _tickets = await this.findManyById(tickets.ticketsIds)

      if (_tickets.length !== tickets.ticketsIds.length)
        throw new NotFoundException()

      if (_tickets.some((t) => t.status !== TicketStatusEnum.RESERVATED))
        throw new BadRequestException('Билеты не в том статусе')

      /* TODO: Здесь должна была быть оплата */
      if (true) {
      }

      _tickets.map(async (ticket) => {
        try {
          /* TODO: Вынести в отдельный метод. И наверное сервис. С поиском по id и фильтрами */
          await prisma.userFilm.update({
            where: {
              filmId_userId: {
                userId: tickets.userId,
                filmId: ticket.session.film.id,
              },
            },
            data: {
              status: TicketStatusEnum.BOOKED,
            },
          })

          return await prisma.ticket.update({
            where: {
              id: ticket.id,
            },
            data: {
              status: TicketStatusEnum.BOOKED,
              /* TODO: Вынести в отдельный метод. И наверное сервис. С поиском по id и фильтрами */
              UserTicket: {
                update: {
                  where: {
                    userId_ticketId: {
                      ticketId: ticket.id,
                      userId: tickets.userId,
                    },
                  },
                  data: {
                    status: TicketStatusEnum.BOOKED,
                  },
                },
              },
            },
          })
        } catch (error) {
          return error
        }
      })

      await this.deleteCheckPaymentJobs(tickets)

      await this.sendBuyTicketNotification(tickets.userId, _tickets)

      await this.sendBuyTicketEmailNotification(tickets.userId, _tickets)

      return _tickets
    })
  }

  async sendBuyTicketNotification(
    userId: number,
    tickets: Prisma.TicketWhereInput[] | any,
  ) {
    tickets.forEach((ticket) => {
      this.sendNotification({
        userId,
        type: NotificationType.TICKET_BOOKED,
        content: `
        <b>Оплата прошла успешно.</b>
        <br/>
        Ваш билет на фильм ${ticket.session.film.title} ряд <b>${ticket.code[0]}</b> место <b>${ticket.code[1]}</b> добавлен в ваш личный кабинет. 
        <br/>
        Вы можете найти файл с билетом в разделе "Билеты" в вашем аккаунте на нашем сайте, или на электронной почте.
        `,
      })
    })
  }

  async sendBuyTicketEmailNotification(
    userId: number,
    tickets: Prisma.TicketWhereInput[] | any,
  ) {
    const user = await this.userService.findOneById(userId)

    tickets.forEach((ticket) => {
      const message = getTicketBuyEmailMessage({
        ticketId: ticket.id,
        title: ticket.session.film.title,
        genres: ticket.session.film.genres,
        cinemaTitle: 'Кинотеатр',
        rating: '12+',
        year: new Date().getFullYear(),
        sessionTimeStart: ticket.session.sessionTimeStart,
        userFullName: user.name,
        cinemaHall: 'Зал 1',
        adress: 'г. Кемерово, пр. Ленина, 91',
        placeCode: ticket.code,
        cost: ticket.cost,
      })

      this.emailService.addEmailWithQRCodeQueue({
        to: user.email,
        subject: ticket.session.film.title,
        body: message,
        /* TODO: */
        qrContent: `http://localhost:3000/ticket/${ticket.id}`,
      })
    })
  }

  async sendNotification(body: CreateNotification) {
    this.notificationsService.create({
      ...body,
    })
  }

  async deleteCheckPaymentJobs(tickets: BookTicketsDTO) {
    try {
      const jobs = await this.ticketsQueue.getJobs([
        'waiting',
        'active',
        'delayed',
      ])
      jobs.forEach(async (job) => {
        if (job.name === 'check-payment') {
          const { ticketId, userId } = job.data
          if (
            tickets.ticketsIds.includes(ticketId) &&
            tickets.userId === userId
          )
            await job.remove()
        }
      })
    } catch (error) {
      return error
    }
  }

  /* Утилиты не в запросе */
  async findManyById(ticketIds: number[]) {
    const tickets = await this.prismaService.ticket.findMany({
      where: {
        id: {
          in: ticketIds,
        },
      },
      select: this.ticketResourceIncludeBuilder(),
    })
    return removeNesting(tickets) as typeof tickets
  }

  async changeTicketStatus(ticketId: number, status: TicketStatus['value']) {
    const ticket = this.prismaService.ticket.update({
      where: {
        id: ticketId,
      },
      data: {
        status,
      },
      select: this.ticketResourceIncludeBuilder(),
    })
    return ticket
  }

  async dropAllReservated() {
    const tickets = await this.findByFilter({
      status: TicketStatusEnum.RESERVATED,
    })

    tickets.forEach((ticket) => {
      if (!ticket.UserTicket.length)
        this.changeTicketStatus(ticket.id, TicketStatusEnum.AVAILABLE)
      else
        this.cancelBookedTicket({
          userId: ticket.UserTicket[0].userId,
          ticketsIds: [ticket.id],
        })
      /* console.log(ticket.id)
      console.log(ticket.UserTicket.length)
      console.log(ticket.UserTicket[0]) */
    })
  }

  async findByFilter(params: GetTicketsParamsDTO) {
    const { whereBuilder } =
      await filterBuilder<Prisma.TicketWhereInput>(params)

    const tickets = this.prismaService.ticket.findMany({
      where: whereBuilder,
      select: this.ticketShortResouceIncludeBuilder(),
    })

    return tickets
  }

  ticketResourceIncludeBuilder() {
    return {
      id: true,
      cost: true,
      status: true,
      code: true,
      session: {
        include: {
          film: {
            include: {
              genres: {
                select: {
                  genre: true,
                },
              },
            },
          },
        },
      },
      UserTicket: {
        include: {
          user: true,
        },
      },
    }
  }

  ticketShortResouceIncludeBuilder() {
    return {
      id: true,
      cost: true,
      status: true,
      code: true,
      sessionId: true,
      /* TODO: мб убрать */
      UserTicket: {
        include: {
          user: true,
        },
      },
    }
  }
}
