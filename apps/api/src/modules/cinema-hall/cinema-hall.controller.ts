import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
  Res,
  UseGuards,
} from "@nestjs/common";
import { CinemaHallService } from "./cinema-hall.service";
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "@/shared/guards/jwt-auth.guard";

import { Response } from "express";
import { CreateCinemaHallDto } from "./dto/cinema-hall.dto";

@ApiTags("cinema-hall")
@Controller("cinema-hall")
export class CinemaHallController {
  constructor(private cinemaHallService: CinemaHallService) {}
  // Получить все
  @ApiBearerAuth("AccessToken")
  @ApiResponse({ status: 200, description: "Return array of cinema hall" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  @UseGuards(JwtAuthGuard)
  @Get()
  async getFilms(@Res() response: Response) {
    return response.json(await this.cinemaHallService.findAll());
  }

  // Получить по id
  @ApiBearerAuth("AccessToken")
  @ApiResponse({ status: 200, description: "Return cinema hall by id" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  @UseGuards(JwtAuthGuard)
  @Get("id")
  async getFilmById(
    @Query("cinemaHallId") id: number,
    @Res() response: Response,
  ) {
    return response.json(await this.cinemaHallService.findById(id));
  }

  // Создание
  @ApiBearerAuth("AccessToken")
  @ApiBody({
    type: () => CreateCinemaHallDto,
  })
  @ApiResponse({
    status: 200,
    description: "Cinema hall created in successfully",
  })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  @ApiResponse({ status: 400, description: "Bad request" })
  @ApiResponse({ status: 409, description: "The record is already there" })
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post("create")
  async create(
    @Body() cinemaHallDto: CreateCinemaHallDto,
    @Res() response: Response,
  ) {
    const cinemaHall = await this.cinemaHallService.create(cinemaHallDto);

    return response.json(cinemaHall);
  }
}
