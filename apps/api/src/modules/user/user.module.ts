import { Module } from "@nestjs/common";

import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { ImageModule } from "../image/image.module";

@Module({
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
  imports: [ImageModule],
})
export class UserModule {}
