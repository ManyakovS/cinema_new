import { Injectable, Logger } from '@nestjs/common'
import { Cron } from '@nestjs/schedule'

import { ImageService } from './image.service'

@Injectable()
export class ImageTasks {
  constructor(private imageService: ImageService) {}

  private readonly logger = new Logger(ImageTasks.name)

  @Cron('0 10 3-4 * * *')
  async handleCron() {
    const message = await this.imageService.dropUnused()
    console.log(message)
  }
}
