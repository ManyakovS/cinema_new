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
} from "@nestjs/common";

import { Response } from "express";

import { JwtAuthGuard } from "@/shared/guards/jwt-auth.guard";

import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";

import { SessionService } from "./session.service";
import { CreateSessionDto, GetSessionsParamsDTO } from "./dto/session.dto";

@ApiTags("session")
@Controller("session")
export class SessionController {
  constructor(private sessionService: SessionService) {}

  // Получить все
  @ApiBearerAuth("AccessToken")
  @ApiResponse({ status: 200, description: "Return array of sessions" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  @UseGuards(JwtAuthGuard)
  @Get()
  async getSessions(
    @Query() params: GetSessionsParamsDTO,
    @Res() response: Response,
  ) {
    return response.json(await this.sessionService.findAll(params));
  }

  // Получить по id
  @ApiBearerAuth("AccessToken")
  @ApiResponse({ status: 200, description: "Return session by id" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  @UseGuards(JwtAuthGuard)
  @Get("id")
  async getSessionById(
    @Query("sessionId") id: number,
    @Res() response: Response,
  ) {
    return response.json(await this.sessionService.findById(id));
  }

  // Создание
  @ApiBearerAuth("AccessToken")
  @ApiBody({
    type: () => CreateSessionDto,
  })
  @ApiResponse({ status: 200, description: "Fim created in successfully" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  @ApiResponse({ status: 400, description: "Bad request" })
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post("create")
  async create(
    @Body() sessionDto: CreateSessionDto,
    @Res() response: Response,
  ) {
    const session = await this.sessionService.create(sessionDto);

    return response.json(session);
  }
}
