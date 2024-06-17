import * as argon2 from 'argon2'
import { Injectable, NotFoundException } from '@nestjs/common'

import { PrismaService } from '@/shared/modules/prisma/prisma.service'

import { RegisterUserDto } from '../auth/dto/auth.dto'
import { ChangeUserImage } from './dto/user.dto'
import { ImageService } from '../image/image.service'

@Injectable()
export class UserService {
  constructor(
    private prismaService: PrismaService,
    private imageService: ImageService,
  ) {}

  async findOneByEmail(email: string) {
    return await this.prismaService.user.findUnique({
      where: {
        email,
      },
      select: this.userResourceIncludeBuilder(),
    })
  }

  async findOneById(id: number) {
    return await this.prismaService.user.findUnique({
      where: {
        id,
      },
      select: this.userShortResourceIncludeBuilder(),
    })
  }

  async find() {
    return await this.prismaService.user.findMany({
      select: this.userResourceIncludeBuilder(),
    })
  }

  async create(createDto: RegisterUserDto) {
    return await this.prismaService.user.create({
      select: this.userShortResourceIncludeBuilder(),
      data: {
        email: createDto.email,
        name: createDto.name,
        password: await argon2.hash(createDto.password),
      },
    })
  }

  async changeUserImage(body: ChangeUserImage) {
    const user = await this.findOneById(body.userId)
    const image = await this.imageService.imageById(body.imageId)

    if (!user) throw new NotFoundException(`User not found`)

    if (!image) throw new NotFoundException(`Image not found`)

    return await this.prismaService.user.update({
      where: {
        id: body.userId,
      },
      data: {
        imageId: body.imageId,
      },
      select: this.userShortResourceIncludeBuilder(),
    })
  }

  userShortResourceIncludeBuilder() {
    return {
      id: true,
      email: true,
      phone: true,
      name: true,
      image: true,
    }
  }

  userResourceIncludeBuilder() {
    return {
      id: true,
      email: true,
      phone: true,
      name: true,
      password: true,
      createdAt: true,
      updatedAt: true,
      image: true,
    }
  }
}
