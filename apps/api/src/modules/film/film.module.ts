import { Module } from "@nestjs/common";
import { FilmController } from "./film.controller";
import { FilmService } from "./film.service";
import { ImageService } from "../image/image.service";
import { SessionModule } from "../session/session.module";

@Module({
  controllers: [FilmController],
  providers: [FilmService, ImageService],
  imports: [SessionModule],
})
export class FilmModule {}
