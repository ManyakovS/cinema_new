import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsDateString, IsNotEmpty, IsString } from 'class-validator'

export class CreateCinemaHallDto {
  @ApiProperty({
    type: String,
    example: 'Венера',
  })
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiProperty({
    type: String,
    example: 'ул.Пушкина, д.Калатушкина 15',
  })
  @IsNotEmpty()
  @IsString()
  adress: string

  @ApiProperty({
    type: String,
    example: '2023-01-01',
  })
  @IsNotEmpty()
  @IsDateString()
  @Type(() => IsDateString)
  timeOpen: string

  @ApiProperty({
    type: String,
    example: '2023-01-01',
  })
  @IsNotEmpty()
  @IsDateString()
  @Type(() => IsDateString)
  timeClose: string

  @ApiProperty({
    type: String,
    example: '+79995553412',
    required: false,
  })
  @IsNotEmpty()
  @IsString()
  contact?: string
}
