import { CreateShortSessionDto } from "../../session/dto/session.dto";
import { TicketStatusEnum } from "../../ticket/dto/ticket.dto";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

export class FilmResource {
  id: number;
  shortTitle: string;
  dateStart: Date;
  title: string;
  duration: number;
  images: {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    path: string;
    name: string;
  }[];
}

export class CreateFilmDto {
  @ApiProperty({
    type: String,
    example: "spider-man2",
  })
  @IsNotEmpty()
  @IsString()
  shortTitle: string;

  @ApiProperty({
    type: String,
    example: "Человек-паук 2",
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    type: String,
    example: "2023-01-01",
  })
  @IsNotEmpty()
  @IsDateString()
  @Type(() => IsDateString)
  dateStart: string;

  @ApiProperty({
    type: Number,
    example: "120",
  })
  @IsNotEmpty()
  @IsNumber()
  duration: number;

  @ApiProperty({
    type: String,
    example:
      "Они живут в разных мирах. Коля Герасимов — в сегодняшней Москве, Алиса Селезнева — на сто лет позже. Коля – обычный парень, ему нет дела до будущего. Алису не отпускает прошлое: она должна найти маму, которую потеряла, когда была совсем ребенком. Встреча Алисы и Коли станет началом невероятных приключений, в которых нашим героям предстоит отвоевать у космических пиратов Вселенную, восстановить ход времени и обрести самое дорогое: любовь и дружбу.",
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;
}

export class GetFilmsParamsDTO {
  @ApiProperty({
    type: Number,
    example: 1,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  id?: number;

  @ApiProperty({
    type: String,
    example: "Человек-паук",
    required: false,
  })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiProperty({
    type: String,
    example:
      "Они живут в разных мирах. Коля Герасимов — в сегодняшней Москве, Алиса Селезнева — на сто лет позже. Коля – обычный парень, ему нет дела до будущего. Алису не отпускает прошлое: она должна найти маму, которую потеряла, когда была совсем ребенком. Встреча Алисы и Коли станет началом невероятных приключений, в которых нашим героям предстоит отвоевать у космических пиратов Вселенную, восстановить ход времени и обрести самое дорогое: любовь и дружбу.",
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    type: String,
    example: "spider-man2",
    required: false,
  })
  @IsOptional()
  @IsString()
  shortTitle?: string;

  @ApiProperty({
    type: String,
    example: "2023-01-01",
    required: false,
  })
  @IsOptional()
  @IsDateString()
  dateStart?: string;
}

export class CreateFilmImageDto {
  @ApiProperty({
    type: Number,
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  filmId: number;

  @ApiProperty({
    type: Number,
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  imageId: number;
}

export class CreateFilmGenresDto {
  @ApiProperty({
    type: Number,
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  filmId: number;

  @ApiProperty({
    type: Array,
    example: [1, 2, 3],
  })
  @IsNotEmpty()
  @IsArray()
  genresIds: number[];
}

export class CreateFilmActorsDto {
  @ApiProperty({
    type: Number,
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  filmId: number;

  @ApiProperty({
    type: Array,
    example: [
      {
        actorId: 1,
        position: "Режиссер",
      },
    ],
  })
  @IsNotEmpty()
  @IsArray()
  actors: {
    actorId: number;
    position: string;
  }[];
}

export class GetFilmsByUserParamsDTO {
  @ApiProperty({
    type: Number,
    example: 1,
    required: true,
  })
  @IsOptional()
  @IsNumber()
  userId: number;

  @ApiProperty({
    type: TicketStatusEnum,
    example: TicketStatusEnum.BOOKED,
    required: false,
  })
  @IsOptional()
  @IsString()
  ticketStatus?: TicketStatusEnum;
}

export class FullCreateFilm extends CreateFilmDto {
  @ApiProperty({
    type: Array,
    example: [1, 2, 3],
    required: false,
  })
  @IsOptional()
  @IsArray()
  genresIds: number[];

  @ApiProperty({
    type: Array,
    example: [
      {
        actorId: 1,
        position: "Режиссер",
      },
    ],
    required: false,
  })
  @IsOptional()
  @IsArray()
  actors: {
    actorId: number;
    position: string;
  }[];

  @ApiProperty({
    type: Number,
    example: 1,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  imageId?: number;

  @ApiProperty({
    type: Array<
      Pick<CreateShortSessionDto, "cinemaHallId" | "sessionTimeStart">
    >,
    example: [
      {
        cinemaHallId: 1,
        sessionTimeStart: "2024-06-01T15:00",
      },
    ],
    required: false,
  })
  @IsOptional()
  @IsArray()
  sessions: Pick<CreateShortSessionDto, "cinemaHallId" | "sessionTimeStart">[];
}

export class FullEditFilm extends FullCreateFilm {
  @ApiProperty({
    type: Number,
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
