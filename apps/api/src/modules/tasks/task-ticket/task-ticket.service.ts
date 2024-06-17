import { Injectable, Logger } from '@nestjs/common'
import { Timeout } from '@nestjs/schedule'

@Injectable()
export class TaskTicketService {
  private readonly logger = new Logger(TaskTicketService.name)

  @Timeout('task-ticket-book', 1000)
  handleBooked() {}
}
