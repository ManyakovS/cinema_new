import { Logger, ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { coreSetup } from "./bootstraps/core-setup";
import { prismaSetup } from "./bootstraps/prisma-setup";
import { swaggerSetup } from "./bootstraps/swagger-setup";
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";

(async () => {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule /* { httpsOptions } */,
  );

  app.setGlobalPrefix("/api");

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        enableImplicitConversion: true, // <- This line here
      },
    }),
  );

  app.useStaticAssets(join(__dirname, "..", "public"), {
    prefix: "/public/",
  });

  const configService = await app.get(ConfigService);

  coreSetup(app);
  prismaSetup(app);
  swaggerSetup(app);

  await app.listen(await configService.get<number>("application.port"));

  Logger.log("Server running on PORT 7000", "NestApplication");
})();
