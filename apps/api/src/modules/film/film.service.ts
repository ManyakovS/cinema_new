import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common'

import { PrismaService } from '@/shared/modules/prisma/prisma.service'
import {
  CreateFilmActorsDto,
  CreateFilmDto,
  CreateFilmGenresDto,
  CreateFilmImageDto,
  FullCreateFilm,
  GetFilmsByUserParamsDTO,
  GetFilmsParamsDTO,
} from './dto/film.dto'

import { Prisma } from '@prisma/client'

// Services
import { ImageService } from '../image/image.service'
import { SessionService } from '../session/session.service'

// Filtes
import { filterBuilder } from '@/utils/filter/filter.builder'
import { removeNesting } from '@/utils/nesting/remove-nesting'

import { omit } from 'lodash'
import { IDefaultFilters } from '@/utils/filter'

@Injectable()
export class FilmService {
  constructor(
    private prismaService: PrismaService,
    private imageService: ImageService,
    private sessionService: SessionService
  ) {}

  /* Создание фильма. С сеансами, изображениями */
  async fullCreate(body: FullCreateFilm) {
    try {
      const film = await this.prismaService.$transaction(async (prisma) => {
        let _film = await this.create(body)

        if (body.genresIds?.length)
          await this.putFilmGenres({
            filmId: _film.id,
            genresIds: body.genresIds,
          })

        if (body.actors?.length)
          await this.putFilmActors({
            filmId: _film.id,
            actors: body.actors,
          })

        if (body.imageId)
          await this.addFilmImage({
            filmId: _film.id,
            imageId: body.imageId,
          })

        if (body.sessions.length) {
          await Promise.all(
            body.sessions.map(async (session) => {
              await this.sessionService.createShort({...session, filmId: _film.id })
            })
          )
        }

        return await this.findById(_film.id)
      })

      return film
    } catch (error) {
      console.log(error)
      throw new NotAcceptableException(error)
    }
  }

  async findAll(params: GetFilmsParamsDTO) {
    const films = await this.findByFilter(params)
    return films
  }

  async findByUser(params: GetFilmsByUserParamsDTO) {
    try {
      const userFilm = await this.prismaService.userFilm.findMany({
        where: {
          userId: params.userId,
          status: params.ticketStatus,
        },
      })
      const films = await this.prismaService.film.findMany({
        where: {
          id: {
            in: userFilm.map((uf) => uf.filmId) ?? [],
          },
        },
        include: this.filmUserResouceIncludeBuilder(params.userId),
      })
      return removeNesting(films)
    } catch (error) {
      return error
    }
  }

  async findById(filmId: number) {
    const film = await this.prismaService.film.findFirst({
      where: {
        id: Number(filmId),
      },
      include: this.filmResourceIncludeBuilder(),
    })

    return removeNesting(film)
  }

  async findByShortTitle(shortTitle: string) {
    const film = await this.prismaService.film.findFirst({
      where: {
        shortTitle,
      },
      include: this.filmResourceIncludeBuilder(),
    })

    return removeNesting(film)
  }

  async create(createDto: CreateFilmDto, prisma?: any) {
    const film = await this.prismaService.film.create({
      include: this.filmResourceIncludeBuilder(),
      data: {
        shortTitle: createDto.shortTitle,
        dateStart: new Date(createDto.dateStart),
        title: createDto.title,
        duration: createDto.duration,
      },
    })

    return removeNesting(film)
  }

  async addFilmImage(filmImageDto: CreateFilmImageDto) {
    let film = await this.findById(filmImageDto.filmId)
    const image = await this.imageService.imageById(filmImageDto.imageId)

    if (!film) throw new NotFoundException(`Film not found`)

    if (!image) throw new NotFoundException(`Image not found`)

    film = await this.prismaService.filmImage.create({
      select: {
        filmId: true,
        imageId: true,
      },
      data: {
        ...filmImageDto,
      },
    })

    return removeNesting(film)
  }

  async putFilmGenres(filmGenresDto: CreateFilmGenresDto) {
    // Начало транзакции
    return await this.prismaService.$transaction(async (prisma) => {
      // Получаем текущие жанры, связанные с фильмом
      const currentGenres = (
        await prisma.film.findUnique({
          where: { id: filmGenresDto.filmId },
          select: { genres: true },
        })
      ).genres

      // Получаем ID жанров, которые нужно удалить
      const genresToDelete = currentGenres
        .filter((genre) => !filmGenresDto.genresIds.includes(genre.genreId))
        .map((genre) => genre.genreId)

      // Получаем ID жанров, которые нужно создать
      const genresToCreate = filmGenresDto.genresIds.filter(
        (genreId) => !currentGenres.map((g) => g.genreId).includes(genreId)
      )

      // Удаляем устаревшие связи
      if (genresToDelete.length > 0) {
        await prisma.filmGenre.deleteMany({
          where: {
            filmId: filmGenresDto.filmId,
            genreId: { in: genresToDelete },
          },
        })
      }

      // Обновляем фильм новыми жанрами
      if (genresToCreate.length > 0)
        await prisma.filmGenre.createMany({
          data: genresToCreate.map((genreId) => ({
            filmId: filmGenresDto.filmId,
            genreId,
          })),
        })
    })
  }

  /* Добавить актеров */
  async putFilmActors(filmActorsDto: CreateFilmActorsDto) {
    // Начало транзакции
    return await this.prismaService.$transaction(async (prisma) => {
      // Получаем текущие жанры, связанные с фильмом

      const currentActors = (
        await prisma.film.findUnique({
          where: { id: filmActorsDto.filmId },
          select: { actors: true },
        })
      ).actors

      // Получаем ID жанров, которые нужно удалить
      const actorsToDelete = currentActors
        .filter(
          (actor) =>
            !filmActorsDto.actors.map((a) => a.actorId).includes(actor.actorId)
        )
        .map((actor) => actor.actorId)

      // Получаем ID жанров, которые нужно создать
      const actorsToCreate = filmActorsDto.actors.filter(
        (actor) => !currentActors.map((a) => a.actorId).includes(actor.actorId)
      )

      // Удаляем устаревшие связи
      if (actorsToDelete.length > 0) {
        await prisma.filmActor.deleteMany({
          where: {
            filmId: filmActorsDto.filmId,
            actorId: { in: actorsToDelete },
          },
        })
      }

      // Обновляем фильм новыми жанрами
      if (actorsToCreate.length > 0)
        await prisma.filmActor.createMany({
          data: actorsToCreate.map((actor) => ({
            position: actor.position,
            filmId: filmActorsDto.filmId,
            actorId: actor.actorId,
          })),
        })
    })
  }

  /* Утилиты не в запросе */

  async findByFilter(
    params: Prisma.FilmWhereInput,
    defaultFilters: IDefaultFilters<Prisma.FilmWhereInput> = {}
  ) {
    const { whereBuilder } = await filterBuilder<Prisma.FilmWhereInput>(
      omit(params, Object.keys(defaultFilters)),
      defaultFilters
    )

    const films = await this.prismaService.film.findMany({
      where: whereBuilder,
      include: this.filmShortResouceIncludeBuilder(),
    })

    return removeNesting(films)
  }

  filmUserResouceIncludeBuilder(userId: number) {
    return {
      ...this.filmShortResouceIncludeBuilder(),
      users: {
        where: {
          userId,
        },
        select: {
          notification: true,
          status: true,
          userTickets: true,
        },
      },
    }
  }

  filmShortResouceIncludeBuilder() {
    return {
      images: {
        select: {
          image: true,
        },
      },
      genres: {
        select: {
          genre: true,
        },
      },
    }
  }

  filmResourceIncludeBuilder() {
    return {
      images: {
        select: {
          image: true,
        },
      },
      genres: {
        select: {
          genre: true,
        },
      },
      actors: {
        select: {
          actor: {
            select: {
              id: true,
              name: true,
              image: true,
              imageId: false,
            },
          },
          position: true,
        },
      },
      sessions: {
        select: {
          ...this.sessionService.sessionResourceIncludeBuilder(),
          tickets: true,
        },
      },
    }
  }
}
