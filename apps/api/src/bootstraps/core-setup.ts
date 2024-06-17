import cookieParser from "cookie-parser";

import { INestApplication, ValidationPipe } from "@nestjs/common";

export const coreSetup = (app: INestApplication) => {
  app.enableCors({
    origin: process.env.CLIENT_HOST, // Разрешенный источник
    credentials: true, // Разрешить отправку учетных данных
  });
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe());
};
