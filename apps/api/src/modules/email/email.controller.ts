import {
  Controller,
  Post,
  Body,
  HttpStatus,
  HttpCode,
  Res,
} from "@nestjs/common";
import { ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";

import { CreateEmail, CreateEmailQrCode } from "./dto/email.dto";

import { Response } from "express";
import { EmailService } from "./email.service";

@ApiTags("email")
@Controller("email")
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @ApiBody({
    type: () => CreateEmail,
  })
  @ApiResponse({ status: 200, description: "Email created in successfully" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  @ApiResponse({ status: 400, description: "Bad request" })
  @HttpCode(HttpStatus.OK)
  @Post("send")
  async create(@Body() body: CreateEmail, @Res() response: Response) {
    const email = await this.emailService.sendEmail(body);

    return response.json(email);
  }

  @ApiBody({
    type: () => CreateEmailQrCode,
  })
  @ApiResponse({ status: 200, description: "Email created in successfully" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  @ApiResponse({ status: 400, description: "Bad request" })
  @HttpCode(HttpStatus.OK)
  @Post("sendQr")
  async createQr(@Body() body: CreateEmailQrCode, @Res() response: Response) {
    const email = await this.emailService.sendEmailWithQRCode(body);

    return response.json(email);
  }
}
