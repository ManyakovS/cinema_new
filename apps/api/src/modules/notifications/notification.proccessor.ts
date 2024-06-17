import { Processor, Process, OnQueueFailed } from "@nestjs/bull";
import { Job } from "bull";

import { NotificationsService } from "./notifications.service";
import { NotificationsGateway } from "./notifications.geteway";

import { Notification } from "@prisma/client";

@Processor("notifications")
export class NotificationsProcessor {
  constructor(
    /* private notificationService: NotificationsService, */
    private readonly notificationsGateway: NotificationsGateway,
  ) {}

  @Process("general-notification")
  async sendGeneralNotification(job: Job) {
    try {
      /* this.notificationsGateway.sendToAll(job.data.message) */
      console.log(job);
    } catch (error) {
      console.error("Ошибка при проверке статуса платежа", error);
    }
  }

  @Process("user-notification")
  async sendNotification(job: Job<Notification>) {
    try {
      this.notificationsGateway.sendToActiveUser(job.data.userId, job.data);
    } catch (error) {
      console.error("Ошибка при проверке статуса платежа", error);
    }
  }

  @OnQueueFailed()
  onFailed(job: Job, error: Error) {
    console.error(`Не удалось выполнить задание ${job.id}`, error);
  }
}
