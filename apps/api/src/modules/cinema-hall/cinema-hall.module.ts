import { Module } from '@nestjs/common'
import { CinemaHallService } from './cinema-hall.service'
import { CinemaHallController } from './cinema-hall.controller'

@Module({
  providers: [CinemaHallService],
  controllers: [CinemaHallController],
  exports: [CinemaHallService],
})
export class CinemaHallModule {}
