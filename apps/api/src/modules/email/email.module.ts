import { Module } from "@nestjs/common";
import { EmailService } from "./email.service";
import { EmailController } from "./email.controller";
import { EmailProcessor } from "./email.processor";

import { MailerModule } from "@nestjs-modules/mailer";
import { QrCodeModule } from "../qr-code/qr-code.module";

import { BullModule } from "@nestjs/bull";

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: "smtp.yandex.ru", // SMTP хост
        port: 465, // SMTP порт
        secure: true, // Использовать TLS
        auth: {
          user: "nest.cinema.mail", // Пользователь почтового ящика
          pass: "kpkwstpxnlllzipe", // Пароль почтового ящика
        },
      },
      defaults: {
        from: '"Кинотеатр" <nest.cinema.mail@yandex.ru>', // Адрес отправителя по-умолчанию
      },
    }),
    BullModule.forRoot({
      redis: {
        host: "localhost",
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: "emails",
    }),
    QrCodeModule,
  ],
  providers: [EmailService, EmailProcessor],
  controllers: [EmailController],
  exports: [EmailService],
})
export class EmailModule {}
