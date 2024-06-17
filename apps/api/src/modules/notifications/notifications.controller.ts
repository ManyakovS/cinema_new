import {
  Controller,
  Post,
  Body,
  HttpStatus,
  HttpCode,
  Res,
  UseGuards,
  Get,
  Query,
  Put,
} from '@nestjs/common'
import { NotificationsService } from './notifications.service'
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from '@/shared/guards/jwt-auth.guard'
import {
  CreateNotification,
  ReadAllNotification,
  ReadNotification,
} from './dto/notifications.dto'

import { Response } from 'express'

@ApiTags('notifications')
@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  /* @Post('send')
  @HttpCode(200)
  sendNotification(@Body('message') message: string) {
    this.notificationsService.sendNotification('Notification sent')
    return { status: 'success', message: 'Notification sent' }
  } */

  // Создание
  @ApiBearerAuth('AccessToken')
  @ApiBody({
    type: () => CreateNotification,
  })
  @ApiResponse({
    status: 200,
    description: 'Notification created in successfully',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post('create')
  async create(@Body() body: CreateNotification, @Res() response: Response) {
    const notification = await this.notificationsService.create(body)

    return response.json(notification)
  }

  // Получить по id
  @ApiBearerAuth('AccessToken')
  @ApiResponse({ status: 200, description: 'Return ticket by id' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @UseGuards(JwtAuthGuard)
  @Get('id')
  async getTicketById(@Query('userId') id: number, @Res() response: Response) {
    return response.json(await this.notificationsService.findAllByUser(id))
  }

  // Прочитать
  @ApiBearerAuth('AccessToken')
  @ApiBody({
    type: () => ReadNotification,
  })
  @ApiResponse({
    status: 200,
    description: 'Notification read in successfully',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Put('read')
  async read(@Body() body: ReadNotification, @Res() response: Response) {
    const notification = await this.notificationsService.read(
      body.notificationId,
    )

    return response.json(notification)
  }

  // Прочитать все
  @ApiBearerAuth('AccessToken')
  @ApiBody({
    type: () => ReadAllNotification,
  })
  @ApiResponse({
    status: 200,
    description: 'Notifications read in successfully',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Put('readAll')
  async readAll(@Body() body: ReadAllNotification, @Res() response: Response) {
    const notifications = await this.notificationsService.readAll(body.userId)

    return response.json(notifications)
  }
}
