import { ApiProperty, PickType } from '@nestjs/swagger'
import { User } from '@prisma/client'
import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class CreateVerifyDto {
  @ApiProperty({
    type: String,
    example: 'test@mail.com',
  })
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string
}

export class VerifyDto {
  @ApiProperty({
    type: String,
    example: 'test@mail.com',
  })
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string

  @ApiProperty({
    type: String,
    example: '124124124',
  })
  @IsNotEmpty()
  @IsString()
  verifyCode: string
}

export class RegisterUserDto extends CreateVerifyDto {
  @ApiProperty({
    type: String,
    example: 'test',
  })
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiProperty({
    type: String,
    example: 'password',
  })
  @IsNotEmpty()
  @IsString()
  password: string

  @ApiProperty({
    type: String,
    example: '124124124',
  })
  @IsNotEmpty()
  @IsString()
  verifyCode: string
}

export class LoginUserDto {
  @ApiProperty({
    type: String,
    example: 'test@mail.com',
  })
  @IsNotEmpty()
  @IsString()
  email: string

  @ApiProperty({
    type: String,
    example: 'password',
  })
  @IsNotEmpty()
  @IsString()
  password: string
}

export interface AuthResource {
  user: User
  accessToken: string
}

export interface UserResource extends User {}
