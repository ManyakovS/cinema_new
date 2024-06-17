import * as argon2 from "argon2";

import {
  BadRequestException,
  HttpStatus,
  Injectable,
  NotFoundException,
  UnauthorizedException,
  UnprocessableEntityException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "@prisma/client";

import { UserService } from "../user/user.service";
import {
  LoginUserDto,
  CreateVerifyDto,
  RegisterUserDto,
  VerifyDto,
} from "./dto/auth.dto";
import { PrismaService } from "@/shared/modules/prisma/prisma.service";
import { EmailService } from "../email/email.service";
import { getEmailVerifyTemplate } from "./utils/get-email-verify-template";

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private prismaService: PrismaService,
    private emailService: EmailService,
  ) {}

  async getUser(userId: number) {
    return await this.userService.findOneById(userId);
  }

  async existingUser(email: string) {
    const existingUser = await this.userService.findOneByEmail(email);

    if (existingUser)
      throw new UnprocessableEntityException("User already registered");

    return false;
  }

  async register(registerDto: RegisterUserDto) {
    if (!(await this.existingUser(registerDto.email))) {
      const verify = await this.verifyCode({
        verifyCode: registerDto.verifyCode,
        email: registerDto.email,
      });

      if (verify) {
        const user = await this.userService.create(registerDto);

        return {
          user,
          accessToken: await this.signAccessToken(user),
          refreshToken: await this.signRefreshToken(user),
        };
      }
    }
  }

  async login(loginDto: LoginUserDto) {
    const user = await this.userService.findOneByEmail(loginDto.email);

    if (!user || !(await argon2.verify(user.password, loginDto.password)))
      throw new UnauthorizedException("Incorrect Credentials");

    return {
      user,
      accessToken: await this.signAccessToken(user),
      refreshToken: await this.signRefreshToken(user),
    };
  }

  async refresh(token: string) {
    const user = await this.verifyUser(token);

    return {
      user,
      accessToken: await this.signAccessToken(user),
    };
  }

  async signAccessToken(user: Partial<User>) {
    const payload = {
      sub: user.id,
      email: user.email,
    };

    return this.jwtService.signAsync(payload, {
      expiresIn: "15m",
    });
  }

  async signRefreshToken(user: Partial<User>) {
    const payload = {
      sub: user.id,
      email: user.email,
    };

    return this.jwtService.signAsync(payload, {
      expiresIn: "365d",
    });
  }

  async verifyUser(token: string) {
    const verifiedToken = await this.jwtService.verifyAsync(token);

    if (!verifiedToken) throw new UnauthorizedException("Invalid Token");

    const user = await this.userService.findOneById(verifiedToken.sub);

    if (!user) throw new UnauthorizedException("Invalid Token");

    return user;
  }

  async sendVerifyCode(body: CreateVerifyDto) {
    const exitingUser = await this.existingUser(body.email);

    if (!exitingUser) {
      const code = (Math.floor(Math.random() * 900000) + 100000).toString();

      await this.prismaService.verify.create({
        data: {
          ...body,
          code,
        },
      });

      await this.emailService.sendEmail({
        to: body.email,
        subject: "Верификация",
        body: getEmailVerifyTemplate({
          code,
          link: `${process.env.CLIENT_HOST}/auth/register/register/main-form?email=${body.email}&verifyCode=${code}`,
        }),
      });

      return HttpStatus.OK;
    }
  }

  async verifyCode(body: VerifyDto) {
    const verify = (
      await this.prismaService.verify.findMany({
        where: {
          email: {
            equals: body.email,
          },
        },
        orderBy: {
          createdAt: "desc",
        },
        take: 1,
      })
    )[0];

    if (!verify)
      throw new NotFoundException("По адресу электронной почты код не найден");

    if (verify.code !== body.verifyCode)
      throw new BadRequestException("Неверный код верификации");

    if (
      new Date().getTime() - new Date(verify.createdAt).getTime() >
      6 * 3600 * 1000
    )
      throw new BadRequestException("Срок действия кода верификации истек");

    return verify;
  }
}
