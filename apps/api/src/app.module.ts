import { Module } from "@nestjs/common";

import { PrismaModule } from "./shared/modules/prisma/prisma.module";

// Users
import { AuthModule } from "./modules/auth/auth.module";
import { UserModule } from "./modules/user/user.module";

// Main
import { ConfigModule } from "@nestjs/config";
import { ImageModule } from "./modules/image/image.module";

// Tasks
import { ScheduleModule } from "@nestjs/schedule";

// Notifications
import { EmailModule } from "./modules/email/email.module";

import applicationConfig from "@/configs/application.config";

const commonModules = [
  ConfigModule.forRoot({
    load: [applicationConfig],
  }),
  PrismaModule,
];

const userModules = [AuthModule, UserModule];

const modules = [ImageModule, EmailModule];

const taskModules = [ScheduleModule.forRoot()];

@Module({
  imports: [...userModules, ...commonModules, ...modules, ...taskModules],
  controllers: [],
  providers: [],
})
export class AppModule {}
