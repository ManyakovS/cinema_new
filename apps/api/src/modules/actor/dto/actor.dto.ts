import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateActorDto {
  @ApiProperty({
    type: String,
    example: "Раян Гослинг",
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: Number,
    example: 75,
    required: false,
  })
  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  imageId: number;
}

export class GetActorsParamsDTO {
  @ApiProperty({
    type: String,
    example: "Раян Гослинг",
    required: false,
  })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  name: string;
}

export class CreateActorImageDto {
  @ApiProperty({
    type: Number,
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  actorId: number;

  @ApiProperty({
    type: Number,
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  imageId: number;
}
