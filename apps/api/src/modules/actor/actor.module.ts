import { Module } from "@nestjs/common";
import { ActorController } from "./actor.controller";
import { ActorService } from "./actor.service";
import { ImageModule } from "../image/image.module";

@Module({
  controllers: [ActorController],
  providers: [ActorService],
  imports: [ImageModule],
})
export class ActorModule {}
