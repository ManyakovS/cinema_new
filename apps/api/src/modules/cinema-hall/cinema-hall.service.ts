import { ConflictException, Injectable } from '@nestjs/common'

import { PrismaService } from '@/shared/modules/prisma/prisma.service'
import { CreateCinemaHallDto } from './dto/cinema-hall.dto'

@Injectable()
export class CinemaHallService {
  constructor(private prismaService: PrismaService) {}

  async findAll() {
    return this.prismaService.cinemaHall.findMany()
  }

  async findById(id: number) {
    return this.prismaService.cinemaHall.findFirst({
      where: {
        id,
      },
      include: {
        places: true,
      },
    })
  }

  async findByName(name: string) {
    return this.prismaService.cinemaHall.findFirst({
      where: {
        name,
      },
    })
  }

  async create(createDto: CreateCinemaHallDto) {
    const cinameHall = this.findByName(createDto.name)

    if (cinameHall)
      throw new ConflictException('Запись уже существует в базе данных')

    const cinemaHall = await this.prismaService.cinemaHall.create({
      select: {
        id: true,
        name: true,
        adress: true,
        contact: true,
      },
      data: {
        ...createDto,
        timeOpen: new Date(createDto.timeOpen),
        timeClose: new Date(createDto.timeClose),
      },
    })

    return {
      cinemaHall,
    }
  }
}
