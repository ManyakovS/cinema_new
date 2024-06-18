import { Injectable, NotFoundException } from "@nestjs/common";

import { PrismaService } from "@/shared/modules/prisma/prisma.service";
import { filterBuilder } from "@/utils/filter/filter.builder";
import { CinemaHall, Film, Place, Prisma, Ticket } from "@prisma/client";
import {
  CreateSessionDto,
  CreateShortSessionDto,
  GetSessionsParamsDTO,
  SessionStatusEnum,
} from "./dto/session.dto";
import { TicketService } from "../ticket/ticket.service";
import { CreateTicketDto } from "../ticket/dto/ticket.dto";
import { CinemaHallService } from "../cinema-hall/cinema-hall.service";
import { applyFilters, IDefaultFilters } from "@/utils/filter";

import { omit } from "lodash";

type SelectSessionType = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  sessionTimeStart: Date;
  sessionTimeEnd: Date;
  status: string;
  cinemaHallId?: number;
  filmId?: number;
  film: Film;
  cinemaHall: CinemaHall & { places: Place[] };
  tickets: Ticket[];
};

@Injectable()
export class SessionService {
  constructor(
    private prismaService: PrismaService,
    private ticketServise: TicketService,
    private cinemaHallServise: CinemaHallService,
  ) {}

  async findAll(params: GetSessionsParamsDTO) {
    const films = await this.findByFilter(params);
    return films;
  }

  async findById(id: number) {
    return await this.prismaService.session.findFirst({
      where: {
        id,
      },
      select: {
        ...this.sessionResourceIncludeBuilder(),
        tickets: {
          orderBy: {
            code: "asc",
          },
        },
      },
    });
  }

  async createShort(createDto: CreateShortSessionDto) {
    const film = await this.prismaService.film.findFirst({
      where: {
        id: createDto.filmId,
      },
    });

    const session = await this.prismaService.session.create({
      select: {
        ...this.sessionResourceIncludeBuilder(),
        tickets: {
          orderBy: {
            code: "asc",
          },
        },
      },
      data: {
        ...createDto,
        createdAt: new Date(),
        updatedAt: new Date(),
        sessionTimeStart: new Date(createDto.sessionTimeStart),
        sessionTimeEnd: new Date(
          new Date(createDto.sessionTimeStart).setMinutes(
            new Date(createDto.sessionTimeStart).getMinutes() + film.duration,
          ),
        ),
        status: SessionStatusEnum.AVAILABLE,
      },
    });

    /* TODO: Удалить. Наверное */
    await this.generateSessionTickets(session.id);

    return session as SelectSessionType;
  }

  async create(createDto: CreateSessionDto) {
    const session = await this.prismaService.session.create({
      select: {
        ...this.sessionResourceIncludeBuilder(),
        tickets: {
          orderBy: {
            code: "asc",
          },
        },
      },
      data: {
        ...createDto,
        updatedAt: new Date(),
        sessionTimeStart: new Date(createDto.sessionTimeStart),
        sessionTimeEnd: new Date(createDto.sessionTimeEnd),
      },
    });

    /* TODO: Удалить. Наверное */
    await this.generateSessionTickets(session.id);

    return session as SelectSessionType;
  }

  /* Утилиты не в запросе */

  async generateSessionTickets(sessionId: number) {
    const session = await this.findById(sessionId);

    if (session) {
      const tickets = [];

      session.cinemaHall?.places?.forEach((place) => {
        tickets.push(
          (async () => {
            await this.ticketServise.create({
              sessionId: session.id,
              cost: 300,
              status: "available",
              code: place.code,
            });
          })(),
        );
      });

      return tickets;
    } else
      throw new NotFoundException(`Session with id ${sessionId} not found`);
  }

  async findByFilter(params: GetSessionsParamsDTO) {
    const defaultFilters = {};

    if (params.sessionTimeStart)
      defaultFilters["sessionTimeStart"] = async () => {
        const _filter = new Date(params.sessionTimeStart);
        return {
          where: {
            sessionTimeStart: {
              gte: new Date(_filter.setHours(0, 0, 0, 0)),
              lte: new Date(_filter.setHours(23, 59, 59, 999)),
            },
          },
        };
      };

    const { whereBuilder } = await filterBuilder<Prisma.SessionWhereInput>(
      omit(params, Object.keys(defaultFilters)),
      defaultFilters,
    );

    return this.prismaService.session.findMany({
      where: whereBuilder,
      select: this.sessionShortResouceIncludeBuilder(),
      orderBy: {
        sessionTimeStart: "asc",
      },
    });
  }

  sessionResourceIncludeBuilder() {
    return {
      id: true,
      createdAt: true,
      updatedAt: true,
      sessionTimeStart: true,
      sessionTimeEnd: true,
      status: true,
      cinemaHall: {
        include: {
          places: true,
        },
      },
    };
  }

  sessionShortResouceIncludeBuilder() {
    return {
      id: true,
      sessionTimeStart: true,
      status: true,
      cinemaHallId: true,
    };
  }
}
