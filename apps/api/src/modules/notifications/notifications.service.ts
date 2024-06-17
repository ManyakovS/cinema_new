import { InjectQueue } from '@nestjs/bull'
import { Injectable } from '@nestjs/common'
import { Queue } from 'bull'
import { NotificationsGateway } from './notifications.geteway'
import { PrismaService } from '@/shared/modules/prisma/prisma.service'

import { CreateNotification } from './dto/notifications.dto'

import { Notification, Prisma } from '@prisma/client'
import { filterBuilder } from '@/utils/filter/filter.builder'

@Injectable()
export class NotificationsService {
  constructor(
    private prismaService: PrismaService,
    private readonly notificationsGateway: NotificationsGateway,
    @InjectQueue('notifications') private readonly notificationsQueue: Queue,
  ) {}

  async create(body: CreateNotification) {
    const notification = await this.prismaService.notification.create({
      data: body,
    })

    await this.send(notification)

    return notification
  }

  async read(notificationId: number) {
    const notification = await this.prismaService.notification.update({
      where: {
        id: notificationId,
      },
      data: {
        read: true,
      },
    })

    return notification
  }

  async readAll(userId: number) {
    const notificationsCount = await this.prismaService.notification.updateMany(
      {
        where: {
          userId,
        },
        data: {
          read: true,
        },
      },
    )

    return await this.findAllByUser(userId)
  }

  async findAllByUser(userId: number) {
    const notifications = this.findByFilter({ userId })

    return notifications
  }

  async send(notification: Notification) {
    // Добавляем уведомление в очередь
    await this.notificationsQueue.add('user-notification', { ...notification })
  }

  async findByFilter(params: Prisma.NotificationWhereInput) {
    const { whereBuilder } =
      await filterBuilder<Prisma.NotificationWhereInput>(params)

    const notifications = this.prismaService.notification.findMany({
      where: whereBuilder,
      orderBy: {
        createdAt: 'desc',
      },
    })

    return notifications
  }
}
