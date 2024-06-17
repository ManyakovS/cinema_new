import { Injectable } from '@nestjs/common'
import { MailerService } from '@nestjs-modules/mailer'

import { CreateEmail, CreateEmailQrCode } from './dto/email.dto'
import { QrCodeService } from '../qr-code/qr-code.service'
import { Queue } from 'bull'
import { InjectQueue } from '@nestjs/bull'

@Injectable()
export class EmailService {
  constructor(
    @InjectQueue('emails') private readonly emailQueue: Queue,
    private readonly mailerService: MailerService,
    private readonly qrCodeService: QrCodeService,
  ) {}

  async sendEmail(body: CreateEmail): Promise<void> {
    await this.mailerService.sendMail({
      to: body.to,
      subject: body.subject,
      html: body.body,
    })
  }

  async addEmailWithQRCodeQueue(body: CreateEmailQrCode) {
    await this.emailQueue.add('email-with-qr', { ...body })
  }

  async sendEmailWithQRCode(body: CreateEmailQrCode) {
    // Генерируем QR-код

    const qrCodeBuffer = await this.qrCodeService.generateQrBuffer(
      body.qrContent,
    )
    const dataUri = await this.qrCodeService.generateQR(body.qrContent)

    // Определение опций электронного письма
    const mailOptions = {
      to: body.to,
      subject: body.subject,
      text: 'Пожалуйста, найдите ваш QR-код в приложении.',
      html: this.fillTemplate(body.body, [dataUri]),
      attachments: [
        {
          filename: 'qr-code.png',
          content: qrCodeBuffer,
          contentType: 'image/png',
        },
      ],
    }

    await this.mailerService.sendMail(mailOptions)
  }

  fillTemplate(template, values) {
    return template.replace(/\[(\d+)\]/g, (match, index) => values[index] || '')
  }
}
