import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class GetImageParamsDTO {
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
    example: "./public/#.png",
    required: false,
  })
  @IsOptional()
  @IsString()
  path?: string;
}

export class DeleteImageParamsDTO {
  @ApiProperty({
    type: Number,
    example: 1,
  })
  @IsNumber()
  id: number;
}
