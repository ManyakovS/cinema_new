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
} from "@nestjs/common";

import { Response } from "express";

import { JwtAuthGuard } from "@/shared/guards/jwt-auth.guard";

import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ActorService } from "./actor.service";

import {
  CreateActorDto,
  CreateActorImageDto,
  GetActorsParamsDTO,
} from "./dto/actor.dto";

@ApiTags("actor")
@Controller("actor")
export class ActorController {
  constructor(private actorService: ActorService) {}

  // Получить все
  @ApiBearerAuth("AccessToken")
  @ApiResponse({ status: 200, description: "Return array of actors" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  @UseGuards(JwtAuthGuard)
  @Get()
  async getActors(
    @Query() params: GetActorsParamsDTO,
    @Res() response: Response,
  ) {
    return response.json(await this.actorService.findAll(params));
  }

  // Получить по id
  @ApiBearerAuth("AccessToken")
  @ApiResponse({ status: 200, description: "Return actor by id" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  @UseGuards(JwtAuthGuard)
  @Get("id")
  async getActorById(@Query("actorId") id: number, @Res() response: Response) {
    return response.json(await this.actorService.findById(id));
  }

  // Создание
  @ApiBearerAuth("AccessToken")
  @ApiBody({
    type: () => CreateActorDto,
  })
  @ApiResponse({ status: 200, description: "Fim created in successfully" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  @ApiResponse({ status: 400, description: "Bad request" })
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post("create")
  async create(@Body() actorDto: CreateActorDto, @Res() response: Response) {
    const actor = await this.actorService.create(actorDto);

    return response.json(actor);
  }

  // Добавить изображение
  @ApiBearerAuth("AccessToken")
  @ApiBody({
    type: () => CreateActorImageDto,
  })
  @ApiResponse({
    status: 200,
    description: "Image add to actor in successfully",
  })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  @ApiResponse({ status: 400, description: "Bad request" })
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Put("add-image")
  async addActorImage(
    @Body() actorImageDto: CreateActorImageDto,
    @Res() response: Response,
  ) {
    const actor = await this.actorService.addActorImage(actorImageDto);

    return response.json(actor);
  }
}
