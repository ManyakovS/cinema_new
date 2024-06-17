import { Module } from '@nestjs/common'
import { TaskTicketController } from './task-ticket.controller'
import { TaskTicketService } from './task-ticket.service'

@Module({
  controllers: [TaskTicketController],
  providers: [TaskTicketService],
})
export class TaskTicketModule {}
