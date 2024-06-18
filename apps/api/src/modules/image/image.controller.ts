import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Res,
  UseGuards,
  Get,
  Param,
  Delete,
  Body,
} from "@nestjs/common";

import { Response } from "express";

import { ApiBearerAuth, ApiResponse, ApiTags } from "@nestjs/swagger";

import { FileInterceptor } from "@nestjs/platform-express";

import { ImageService } from "./image.service";
import { multerOptions } from "@/utils/image/multer.config";
import { JwtAuthGuard } from "@/shared/guards/jwt-auth.guard";
import { DeleteImageParamsDTO } from "./dto/image.dto";

@ApiTags("image")
@Controller("image")
export class ImageController {
  constructor(private imageService: ImageService) {}

  // Получить все
  @ApiBearerAuth("AccessToken")
  @ApiResponse({ status: 200, description: "Return array of images" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  @UseGuards(JwtAuthGuard)
  @Get()
  async getFilms(@Res() response: Response) {
    return response.json(await this.imageService.findAll());
  }

  // Загрузка изображения
  @ApiBearerAuth("AccessToken")
  @ApiResponse({ status: 200, description: "File uploaded successfully" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  @UseGuards(JwtAuthGuard)
  @Post()
  @UseInterceptors(FileInterceptor("file", multerOptions))
  async upload(
    @UploadedFile() file: Express.Multer.File,
    @Res() response: Response,
  ) {
    return response.json(await this.imageService.uploadFile(file));
  }

  // Удаление изображения
  @ApiBearerAuth("AccessToken")
  @ApiResponse({ status: 200, description: "File deleted in successfully" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  @ApiResponse({ status: 404, description: "File not found" })
  @UseGuards(JwtAuthGuard)
  @Delete()
  async delete(
    @Body() imageDto: DeleteImageParamsDTO,
    @Res() response: Response,
  ) {
    return response.json(await this.imageService.deleteById(imageDto.id));
  }
}
