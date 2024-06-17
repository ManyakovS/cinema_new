import { Injectable } from '@nestjs/common'
import * as QRCode from 'qrcode'

@Injectable()
export class QrCodeService {
  async generateQR(text: string): Promise<string> {
    try {
      // Генерация QR-кода в виде Data URL
      const dataUrl = await QRCode.toDataURL(text)
      return dataUrl
    } catch (err) {
      throw new Error('Не удалось сгенерировать QR-код')
    }
  }

  async generateQrBuffer(text: string): Promise<string> {
    try {
      // Генерация QR-кода в виде Data URL
      const dataUrl = await QRCode.toBuffer(text)
      return dataUrl
    } catch (err) {
      throw new Error('Не удалось сгенерировать QR-код')
    }
  }
}
