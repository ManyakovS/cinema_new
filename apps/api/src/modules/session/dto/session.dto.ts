import { ApiProperty } from "@nestjs/swagger";
import { SessionStatus } from "@prisma/client";
import { Type } from "class-transformer";

import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

export class CreateSessionDto {
  @ApiProperty({
    type: String,
    example: new Date().toISOString(),
  })
  @IsNotEmpty()
  @IsDateString()
  @Type(() => IsDateString)
  sessionTimeStart: string;

  @ApiProperty({
    type: String,
    example: new Date().toISOString(),
  })
  @IsNotEmpty()
  @IsDateString()
  @Type(() => IsDateString)
  sessionTimeEnd: string;

  @ApiProperty({
    type: String,
    example: "available",
  })
  @IsNotEmpty()
  @IsString()
  status: string;

  @ApiProperty({
    type: Number,
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  cinemaHallId: number;

  @ApiProperty({
    type: Number,
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  filmId: number;
}

export type CreateShortSessionDto = Pick<
  CreateSessionDto,
  "filmId" | "cinemaHallId" | "sessionTimeStart"
>;

export class GetSessionsParamsDTO {
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
    example: 1,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  filmId?: number;

  @ApiProperty({
    type: String,
    example: 1,
    required: false,
  })
  @IsOptional()
  @IsString()
  status?: SessionStatus["value"];

  @ApiProperty({
    type: String,
    example: "2023-01-01",
    required: false,
  })
  @IsOptional()
  @IsDateString()
  @Type(() => IsDateString)
  sessionTimeStart?: string;

  @ApiProperty({
    type: String,
    example: "2023-01-01",
    required: false,
  })
  @IsOptional()
  @IsDateString()
  @Type(() => IsDateString)
  sessionTimeEnd?: string;
}

export enum SessionStatusEnum {
  AVAILABLE = "available",
  COMPLETED = "completed",
}
