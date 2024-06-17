import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

import { Place, SessionStatus } from "@prisma/client";

import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

export enum TicketStatusEnum {
  AVAILABLE = "available",
  SELECTED = "selected",
  RESERVATED = "reservated",
  BOOKED = "booked",
  CANCELED = "canceled",
}

export class CreateTicketDto {
  @ApiProperty({
    type: Number,
    example: "300",
  })
  @IsNotEmpty()
  @IsNumber()
  cost: number;

  @ApiProperty({
    type: String,
    example: "available",
  })
  @IsNotEmpty()
  @IsString()
  status: SessionStatus["value"];

  @ApiProperty({
    type: String,
    example: "B3",
  })
  @IsNotEmpty()
  @IsString()
  code: Place["code"];

  @ApiProperty({
    type: Number,
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  sessionId: number;
}

export class GetTicketsParamsDTO {
  @ApiProperty({
    type: Number,
    example: 1,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  id?: number;

  @ApiProperty({
    type: Number,
    example: 300,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  cost?: number;

  @ApiProperty({
    type: String,
    example: TicketStatusEnum.RESERVATED,
    required: false,
  })
  @IsOptional()
  @IsString()
  status?: TicketStatusEnum;
}

export class BookTicketsDTO {
  @ApiProperty({
    type: Number,
    example: 1,
  })
  @IsNumber()
  userId: number;

  @ApiProperty({
    type: Number,
    example: [898, 899],
    required: false,
  })
  @IsArray()
  ticketsIds: number[];
}
