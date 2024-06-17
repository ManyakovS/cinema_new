import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString } from 'class-validator'

export class CreateEmail {
  @ApiProperty({
    type: String,
    example: 'Rafael2111@yandex.ru',
  })
  @IsEmail()
  to: string

  @ApiProperty({
    type: String,
    example: 'Тема письма',
  })
  @IsString()
  subject: string

  @ApiProperty({
    type: String,
    example: 'Тема письма',
  })
  @IsString()
  body: string
}

export class CreateEmailQrCode extends CreateEmail {
  @ApiProperty({
    type: String,
    example: 'http://localhost:3000/films/film/1/about',
  })
  @IsString()
  qrContent: string
}
