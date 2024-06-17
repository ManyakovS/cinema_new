import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Post,
  Req,
  Res,
  UnauthorizedException,
  UseGuards,
} from "@nestjs/common";
import { Request, Response } from "express";

import { JwtAuthGuard } from "@/shared/guards/jwt-auth.guard";

import { AuthService } from "./auth.service";
import {
  CreateVerifyDto,
  LoginUserDto,
  RegisterUserDto,
  VerifyDto,
} from "./dto/auth.dto";
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("auth")
@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiBody({
    type: () => RegisterUserDto,
  })
  @ApiResponse({ status: 201, description: "User registered successfully" })
  @ApiResponse({ status: 400, description: "Bad request" })
  @Post("register")
  async register(
    @Body() registerDto: RegisterUserDto,
    @Res() response: Response,
  ) {
    const auth = await this.authService.register(registerDto);

    await response.cookie("refresh_token", auth.refreshToken, {
      httpOnly: true,
      path: "/api/auth/refresh",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    delete auth.refreshToken;

    return await response.json(auth);
  }

  @ApiBody({
    type: () => CreateVerifyDto,
  })
  @ApiResponse({ status: 201, description: "Verify code send in successfully" })
  @ApiResponse({ status: 400, description: "Bad request" })
  @Post("verifyEmail")
  async verifyEmail(@Body() body: CreateVerifyDto) {
    return await this.authService.sendVerifyCode(body);
  }

  @ApiBody({
    type: () => VerifyDto,
  })
  @ApiResponse({ status: 201, description: "Verify code send in successfully" })
  @ApiResponse({ status: 400, description: "Bad request" })
  @Post("verifyCode")
  async verifyCode(@Body() body: VerifyDto) {
    return Boolean(await this.authService.verifyCode(body));
  }

  @ApiBody({
    type: () => LoginUserDto,
  })
  @ApiResponse({ status: 200, description: "User logged in successfully" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  @ApiResponse({ status: 400, description: "Bad request" })
  @HttpCode(HttpStatus.OK)
  @Post("login")
  async login(@Body() loginDto: LoginUserDto, @Res() response: Response) {
    const auth = await this.authService.login(loginDto);

    await response.cookie("refresh_token", auth.refreshToken, {
      httpOnly: true,
      path: "/api/auth/refresh",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    delete auth.refreshToken;

    return await response.json(auth);
  }

  @ApiBearerAuth("AccessToken")
  @ApiResponse({ status: 200, description: "Get current user successfully" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  @UseGuards(JwtAuthGuard)
  @Get()
  async current(@Req() request: Request) {
    const userId = request.user["id"];

    if (userId) return await this.authService.getUser(userId);
    else throw new NotFoundException(`User not found`);
  }

  @ApiResponse({ status: 200, description: "Refresh token successfully" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  @Get("refresh")
  async refresh(@Req() request: Request) {
    const token = request.cookies?.refresh_token;

    if (!token) throw new UnauthorizedException("Refresh Token Not Found");

    return await this.authService.refresh(token);
  }

  @ApiResponse({ status: 200, description: "Logout successfully" })
  @Get("logout")
  async logout(@Res() response: Response) {
    response.clearCookie("refresh_token", {
      path: "auth/refresh",
    });

    return response.end();
  }
}
