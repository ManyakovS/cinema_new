import { PrismaService } from '@/shared/modules/prisma/prisma.service'
import { Injectable, NotFoundException } from '@nestjs/common'
import {
  CreateActorDto,
  CreateActorImageDto,
  GetActorsParamsDTO,
} from './dto/actor.dto'
import { filterBuilder } from '@/utils/filter/filter.builder'
import { Prisma } from '@prisma/client'
import { removeNesting } from '@/utils/nesting/remove-nesting'
import { ImageService } from '../image/image.service'

@Injectable()
export class ActorService {
  constructor(
    private prismaService: PrismaService,
    private imageService: ImageService,
  ) {}

  async findAll(params: GetActorsParamsDTO) {
    const actors = await this.findByFilter(params)
    return actors
  }

  async findById(id: number) {
    return await this.prismaService.actor.findFirst({
      where: {
        id,
      },
      select: this.actorSelectBuilder(),
    })
  }

  async create(createDto: CreateActorDto) {
    const image = await this.imageService.imageById(createDto.imageId)
    if (!image) throw new NotFoundException(`Image not found`)

    const actor = await this.prismaService.actor.create({
      data: {
        ...createDto,
      },
    })

    return actor
  }

  async addActorImage(actorImageDto: CreateActorImageDto) {
    const actor = await this.findById(actorImageDto.actorId)
    const image = await this.imageService.imageById(actorImageDto.imageId)

    if (!actor) throw new NotFoundException(`Film not found`)

    if (!image) throw new NotFoundException(`Image not found`)

    return await this.prismaService.actor.update({
      where: {
        id: actorImageDto.actorId,
      },
      data: {
        ...actorImageDto,
      },
    })
  }

  /* Утилиты не в запросе */

  async findByFilter(params: GetActorsParamsDTO) {
    const { whereBuilder } = await filterBuilder<Prisma.ActorWhereInput>(params)

    const actors = await this.prismaService.actor.findMany({
      where: whereBuilder,
      select: this.actorSelectBuilder(),
    })

    return removeNesting(actors)
  }

  actorSelectBuilder() {
    return {
      id: true,
      name: true,
      image: true,
    }
  }
}
