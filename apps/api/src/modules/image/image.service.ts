import { HttpCode, Injectable, NotFoundException } from '@nestjs/common'

import { PrismaService } from '@/shared/modules/prisma/prisma.service'

import { basename, extname } from 'path'

import { readFileSync } from 'fs'
import { Prisma, Image } from '@prisma/client'
import { GetImageParamsDTO } from './dto/image.dto'

import { applyFilters } from '@/utils/filter'

@Injectable()
export class ImageService {
  constructor(private prismaService: PrismaService) {}

  async uploadFile(file: Express.Multer.File) {
    const savedFiles = await this.findLastFileByFileName(
      basename(file.originalname, extname(file.originalname)),
    )

    const fileStorageInDB = {
      name: file.filename,
      path: file.path,
    }

    const savedFile = savedFiles[0]
    if (savedFile) {
      if (compareFiles(savedFile.path, file.path)) {
        const fs = require('fs')
        fs.unlink(`public/${file.filename}`, (err) => {
          if (err) console.error('Error deleting file:', err)
          else console.log('File deleted:', file.filename)
        })

        fileStorageInDB.path = savedFile.path
      }
    }

    const filestored = await this.prismaService.image.create({
      data: fileStorageInDB,
    })

    return filestored

    function compareFiles(file1: string, file2: string): boolean {
      try {
        const data1 = readFileSync(file1, 'utf-8')
        const data2 = readFileSync(file2, 'utf-8')
        return data1 === data2
      } catch (error) {
        console.error('Ошибка при чтении файлов:', error)
        return false
      }
    }
  }

  async findAll() {
    return await this.prismaService.image.findMany()
  }

  async delete(image: Image) {
    if (image) {
      const fs = require('fs')

      const imagesWithSamePath = await this.findByFilter({
        path: image.path,
      })

      if (imagesWithSamePath.length <= 1) {
        fs.unlink(`${image.path}`, (err) => {
          if (err) console.error('Error deleting file:', err)
          else console.log('File deleted:', image.path)
        })
      }

      return await this.prismaService.image.delete({
        where: {
          id: image.id,
        },
      })
    } else throw new NotFoundException(`Image not found`)
  }

  async deleteById(id: number) {
    const images = await this.findByFilter({ id } as GetImageParamsDTO)

    const image = images[0]
    if (image) {
      const fs = require('fs')

      const imagesWithSamePath = await this.findByFilter({
        path: image.path,
      })

      if (imagesWithSamePath.length <= 1) {
        fs.unlink(`${image.path}`, (err) => {
          if (err) console.error('Error deleting file:', err)
          else console.log('File deleted:', image.path)
        })
      }

      return await this.prismaService.image.delete({
        where: {
          id,
        },
      })
    } else throw new NotFoundException(`Image with id ${id} not found`)
  }

  /* функции без запросов */

  async imageById(id: number) {
    return await this.prismaService.image.findFirst({
      where: {
        id,
      },
    })
  }

  async findLastFileByFileName(filename: string) {
    return await this.prismaService.image.findMany({
      take: 1,
      where: {
        name: {
          contains: String(filename),
        },
      },
      orderBy: {
        updatedAt: 'desc',
      },
    })
  }

  async findByFilter(params: GetImageParamsDTO) {
    const { whereBuilder } = await applyFilters<Prisma.ImageWhereInput>({
      appliedFiltersInput: params,
      availableFilters: {
        id: async ({ filter }) => {
          return {
            where: {
              id: {
                equals: Number(filter),
              },
            },
          }
        },

        path: async ({ filter }) => {
          return {
            where: {
              path: {
                equals: String(filter),
              },
            },
          }
        },
      },
    })

    return this.prismaService.image.findMany({
      where: whereBuilder,
    })
  }

  async dropUnused() {
    const images = await this.prismaService.image.findMany({
      where: {
        users: {
          none: {},
        },
        films: {
          none: {},
        },
        actors: {
          none: {},
        },
      },
    })

    images.forEach((image) => {
      this.delete(image)
    })

    return `Drop ${images.length} images`
  }
}
