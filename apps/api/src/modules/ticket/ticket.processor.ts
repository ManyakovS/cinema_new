import { Processor, Process, OnQueueFailed } from "@nestjs/bull";
import { TicketService } from "./ticket.service";
import { Job } from "bull";

import { TicketStatusEnum } from "./dto/ticket.dto";

@Processor("tickets")
export class TicketsProcessor {
  constructor(private ticketService: TicketService) {}

  @Process("check-payment")
  async checkPaymentStatus(job: Job) {
    try {
      const ticketId = job.data.ticketId;
      const userId = job.data.userId;

      const ticket = await this.ticketService.findById(ticketId);

      if (ticket?.status === TicketStatusEnum.RESERVATED) {
        if (
          !ticket.UserTicket.some(
            (userTicket) => userTicket.status === TicketStatusEnum.BOOKED,
          )
        ) {
          await this.ticketService.cancelBookedTicket({
            userId,
            ticketsIds: [ticketId],
          });
        }
      }

      return;
    } catch (error) {
      console.error("Ошибка при проверке статуса платежа", error);
    }
  }

  @OnQueueFailed()
  onFailed(job: Job, error: Error) {
    console.error(`Не удалось выполнить задание ${job.id}`, error);
  }
}
