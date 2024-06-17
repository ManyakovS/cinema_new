import { Module } from '@nestjs/common'
import { SessionService } from './session.service'

import { SessionController } from './session.controller'
import { CinemaHallModule } from '../cinema-hall/cinema-hall.module'
import { TicketModule } from '../ticket/ticket.module'

@Module({
  providers: [SessionService],
  controllers: [SessionController],
  imports: [TicketModule, CinemaHallModule],
  exports: [SessionService],
})
export class SessionModule {}
