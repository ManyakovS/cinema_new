import { Module } from '@nestjs/common'

import { PrismaModule } from './shared/modules/prisma/prisma.module'

import applicationConfig from '@/configs/application.config'

// Users
import { AuthModule } from './modules/auth/auth.module'
import { UserModule } from './modules/user/user.module'

// Main
import { FilmModule } from './modules/film/film.module'
import { ConfigModule } from '@nestjs/config'
import { ImageModule } from './modules/image/image.module'
import { CinemaHallModule } from './modules/cinema-hall/cinema-hall.module'
import { SessionModule } from './modules/session/session.module'
import { TicketModule } from './modules/ticket/ticket.module'
import { PlaceModule } from './modules/place/place.module'
import { ActorModule } from './modules/actor/actor.module'

// Tasks
import { ScheduleModule } from '@nestjs/schedule'
import { TaskTicketModule } from './modules/tasks/task-ticket/task-ticket.module'

// Notifications
import { NotificationsModule } from './modules/notifications/notifications.module'
import { EmailModule } from './modules/email/email.module'

const commonModules = [
  ConfigModule.forRoot({
    load: [applicationConfig],
  }),
  PrismaModule,
]

const userModules = [AuthModule, UserModule]

const modules = [
  FilmModule,
  ImageModule,
  CinemaHallModule,
  SessionModule,
  TicketModule,
  PlaceModule,
  ActorModule,
  NotificationsModule,
  EmailModule,
]

const taskModules = [ScheduleModule.forRoot(), TaskTicketModule]

@Module({
  imports: [...userModules, ...commonModules, ...modules, ...taskModules],
})
export class AppModule {}
