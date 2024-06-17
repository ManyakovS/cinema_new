import { Module } from "@nestjs/common";
import { BullModule } from "@nestjs/bull";

import { NotificationsController } from "./notifications.controller";

import { NotificationsService } from "./notifications.service";
import { NotificationsGateway } from "./notifications.geteway";
import { NotificationsProcessor } from "./notification.proccessor";
import { AuthModule } from "../auth/auth.module";

@Module({
  providers: [
    NotificationsService,
    NotificationsGateway,
    NotificationsProcessor,
  ],
  controllers: [NotificationsController],
  imports: [
    BullModule.forRoot({
      redis: {
        host: "localhost",
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: "notifications",
    }),
    AuthModule,
  ],
  exports: [NotificationsService, BullModule],
})
export class NotificationsModule {}
