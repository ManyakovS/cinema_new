import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Put,
  Res,
  UseGuards,
} from "@nestjs/common";

import { JwtAuthGuard } from "@/shared/guards/jwt-auth.guard";

import { UserService } from "./user.service";
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ChangeUserImage } from "./dto/user.dto";

import { Response } from "express";

@ApiTags("user")
@Controller("users")
export class UserController {
  constructor(private userService: UserService) {}

  @ApiBearerAuth("AccessToken")
  @ApiResponse({ status: 200, description: "Return array of users" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  @UseGuards(JwtAuthGuard)
  @Get()
  async get() {
    return await this.userService.find();
  }

  // Добавить изображение
  @ApiBearerAuth("AccessToken")
  @ApiBody({
    type: () => ChangeUserImage,
  })
  @ApiResponse({
    status: 200,
    description: "Image add to actor in successfully",
  })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  @ApiResponse({ status: 400, description: "Bad request" })
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Put("change-image")
  async changeUserImage(
    @Body() body: ChangeUserImage,
    @Res() response: Response,
  ) {
    const user = await this.userService.changeUserImage(body);

    return response.json(user);
  }
}
