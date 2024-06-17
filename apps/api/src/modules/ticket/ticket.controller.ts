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
import {
  BookTicketsDTO,
  CreateTicketDto,
  GetTicketsParamsDTO,
} from "./dto/ticket.dto";

import { TicketService } from "./ticket.service";

@ApiTags("ticket")
@Controller("ticket")
export class TicketController {
  constructor(private ticketService: TicketService) {}

  // Получить все
  @ApiBearerAuth("AccessToken")
  @ApiResponse({ status: 200, description: "Return array of tickets" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  @UseGuards(JwtAuthGuard)
  @Get()
  async getTickets(
    @Query() params: GetTicketsParamsDTO,
    @Res() response: Response,
  ) {
    return response.json(await this.ticketService.findAll(params));
  }

  // Получить по id
  @ApiBearerAuth("AccessToken")
  @ApiResponse({ status: 200, description: "Return ticket by id" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  @UseGuards(JwtAuthGuard)
  @Get("id")
  async getTicketById(
    @Query("ticketId") id: number,
    @Res() response: Response,
  ) {
    return response.json(await this.ticketService.findById(id));
  }

  // Получить по userId
  @ApiBearerAuth("AccessToken")
  @ApiResponse({ status: 200, description: "Return ticket by id" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  @UseGuards(JwtAuthGuard)
  @Get("userId")
  async getTicketByUserId(
    @Query("userId") userId: number,
    @Query("filmId") filmId: number,
    @Res() response: Response,
  ) {
    return response.json(
      await this.ticketService.findAllByUser(userId, filmId),
    );
  }

  // Получить по id
  @ApiBearerAuth("AccessToken")
  @ApiResponse({ status: 200, description: "Return ticket by ids" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  @UseGuards(JwtAuthGuard)
  @Get("ids")
  async getTicketByIds(
    @Query("ticketIds") ids: string[],
    @Res() response: Response,
  ) {
    return response.json(
      await this.ticketService.findByIds(ids.map((id) => Number.parseInt(id))),
    );
  }

  // Создание
  @ApiBearerAuth("AccessToken")
  @ApiBody({
    type: () => CreateTicketDto,
  })
  @ApiResponse({ status: 200, description: "Film created in successfully" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  @ApiResponse({ status: 400, description: "Bad request" })
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post("create")
  async create(@Body() ticketDto: CreateTicketDto, @Res() response: Response) {
    const ticket = await this.ticketService.create(ticketDto);

    return response.json(ticket);
  }

  // Забронировать
  @ApiBearerAuth("AccessToken")
  @ApiBody({
    type: () => BookTicketsDTO,
  })
  @ApiResponse({ status: 200, description: "Film created in successfully" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  @ApiResponse({ status: 400, description: "Bad request" })
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post("book")
  async book(@Body() ticketDto: BookTicketsDTO, @Res() response: Response) {
    const ticket = await this.ticketService.bookedTicket(ticketDto);

    return response.json(ticket);
  }

  // Отменить бронь
  @ApiBearerAuth("AccessToken")
  @ApiBody({
    type: () => BookTicketsDTO,
  })
  @ApiResponse({ status: 200, description: "Film created in successfully" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  @ApiResponse({ status: 400, description: "Bad request" })
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post("cancelBooked")
  async cancelBooked(
    @Body() ticketDto: BookTicketsDTO,
    @Res() response: Response,
  ) {
    const ticket = await this.ticketService.cancelBookedTicket(ticketDto);

    return response.json(ticket);
  }

  // Купить
  @ApiBearerAuth("AccessToken")
  @ApiBody({
    type: () => BookTicketsDTO,
  })
  @ApiResponse({ status: 200, description: "Film created in successfully" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  @ApiResponse({ status: 400, description: "Bad request" })
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post("buy")
  async buy(@Body() ticketDto: BookTicketsDTO, @Res() response: Response) {
    const ticket = await this.ticketService.buyTicket(ticketDto);

    return response.json(ticket);
  }
}
