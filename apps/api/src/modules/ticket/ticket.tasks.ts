import { Injectable, Logger } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import { TicketService } from "./ticket.service";

@Injectable()
export class TicketTasks {
  constructor(private ticketService: TicketService) {}

  private readonly logger = new Logger(TicketTasks.name);

  @Cron("0 5 3-4 * * *")
  async handleCron() {
    await this.ticketService.dropAllReservated();
  }
}
