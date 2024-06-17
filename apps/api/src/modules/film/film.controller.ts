import {
  Controller,
  UseGuards,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Body,
  Res,
  Param,
  Query,
  Put,
} from '@nestjs/common'

import { Response } from 'express'

import { JwtAuthGuard } from '@/shared/guards/jwt-auth.guard'

import { FilmService } from './film.service'
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger'

import {
  CreateFilmActorsDto,
  CreateFilmDto,
  CreateFilmGenresDto,
  CreateFilmImageDto,
  FullCreateFilm,
  GetFilmsByUserParamsDTO,
  GetFilmsParamsDTO,
} from './dto/film.dto'

@ApiTags('film')
@Controller('films')
export class FilmController {
  constructor(private filmService: FilmService) {}

  // Получить все
  @ApiBearerAuth('AccessToken')
  @ApiResponse({ status: 200, description: 'Return array of films' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @UseGuards(JwtAuthGuard)
  @Get()
  async getFilms(
    @Query() params: GetFilmsParamsDTO,
    @Res() response: Response,
  ) {
    return response.json(await this.filmService.findAll(params))
  }

  // Получить все по юзеру
  @ApiBearerAuth('AccessToken')
  @ApiResponse({ status: 200, description: 'Return array of films' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @UseGuards(JwtAuthGuard)
  @Get('by-user')
  async getFilmsByUser(
    @Query() params: GetFilmsByUserParamsDTO,
    @Res() response: Response,
  ) {
    return response.json(await this.filmService.findByUser(params))
  }

  // Получить по id
  @ApiBearerAuth('AccessToken')
  @ApiResponse({ status: 200, description: 'Return film by id' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @UseGuards(JwtAuthGuard)
  @Get('id')
  async getFilmById(@Query('filmId') id: number, @Res() response: Response) {
    return response.json(await this.filmService.findById(id))
  }

  // Получить по shortName
  @ApiBearerAuth('AccessToken')
  @ApiResponse({ status: 200, description: 'Return film by short title' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @UseGuards(JwtAuthGuard)
  @Get('shortTitle')
  async getFilmByShortName(
    @Query('shortTitle') shortTitle: string,
    @Res() response: Response,
  ) {
    return response.json(await this.filmService.findByShortTitle(shortTitle))
  }

  // Создание
  @ApiBearerAuth('AccessToken')
  @ApiBody({
    type: () => CreateFilmDto,
  })
  @ApiResponse({ status: 200, description: 'Fim created in successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post('create')
  async create(@Body() filmDto: CreateFilmDto, @Res() response: Response) {
    const film = await this.filmService.create(filmDto)

    return response.json(film)
  }

  // Создание полное
  @ApiBearerAuth('AccessToken')
  @ApiBody({
    type: () => FullCreateFilm,
  })
  @ApiResponse({ status: 200, description: 'Fim created in successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post('fullCreate')
  async fullCreate(@Body() body: FullCreateFilm, @Res() response: Response) {
    const film = await this.filmService.fullCreate(body)

    return response.json(film)
  }

  // Добавить изображение
  @ApiBearerAuth('AccessToken')
  @ApiBody({
    type: () => CreateFilmImageDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Image add to film in successfully',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post('add-image')
  async addFilmImage(
    @Body() filmImageDto: CreateFilmImageDto,
    @Res() response: Response,
  ) {
    const film = await this.filmService.addFilmImage(filmImageDto)

    return response.json(film)
  }

  // Добавить/Изменить жанр
  @ApiBearerAuth('AccessToken')
  @ApiBody({
    type: () => CreateFilmGenresDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Genres add to film in successfully',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Put('add-genres')
  async addFilmGenres(
    @Body() filmGenresDto: CreateFilmGenresDto,
    @Res() response: Response,
  ) {
    const film = await this.filmService.putFilmGenres(filmGenresDto)

    return response.json(film)
  }

  // Добавить/Изменить жанр
  @ApiBearerAuth('AccessToken')
  @ApiBody({
    type: () => CreateFilmActorsDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Genres add to film in successfully',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Put('add-actors')
  async addFilmActors(
    @Body() filmActorsDto: CreateFilmActorsDto,
    @Res() response: Response,
  ) {
    const film = await this.filmService.putFilmActors(filmActorsDto)

    return response.json(film)
  }
}
