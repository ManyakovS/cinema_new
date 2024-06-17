import { Module } from '@nestjs/common'
import { TicketController } from './ticket.controller'
import { TicketService } from './ticket.service'
import { BullModule } from '@nestjs/bull'
import { TicketsProcessor } from './ticket.processor'
import { NotificationsModule } from '../notifications/notifications.module'
import { UserModule } from '../user/user.module'
import { EmailModule } from '../email/email.module'
import { TicketTasks } from './ticket.tasks'

@Module({
  controllers: [TicketController],
  providers: [TicketService, TicketsProcessor, TicketTasks],
  exports: [TicketService],
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'tickets',
    }),
    NotificationsModule,
    UserModule,
    EmailModule,
  ],
})
export class TicketModule {}
