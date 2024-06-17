import { Processor, Process, OnQueueFailed } from '@nestjs/bull'
import { Job } from 'bull'

import { EmailService } from './email.service'
import { CreateEmailQrCode } from './dto/email.dto'

@Processor('emails')
export class EmailProcessor {
  constructor(private emailService: EmailService) {}

  @Process('email-with-qr')
  async checkPaymentStatus(job: Job<CreateEmailQrCode>) {
    try {
      this.emailService.sendEmailWithQRCode(job.data)

      return
    } catch (error) {
      console.error('Ошибка при проверке статуса платежа', error)
    }
  }

  @OnQueueFailed()
  onFailed(job: Job, error: Error) {
    console.error(`Не удалось выполнить задание ${job.id}`, error)
  }
}
