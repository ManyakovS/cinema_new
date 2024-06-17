import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class ChangeUserImage {
  @ApiProperty({
    type: Number,
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @ApiProperty({
    type: Number,
    example: 75,
  })
  @IsNotEmpty()
  @IsNumber()
  imageId: number;
}
