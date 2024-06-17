import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'

import { AuthService } from '../auth/auth.service'

import { Notification } from '@prisma/client'

@WebSocketGateway({
  cors: '*',
})
export class NotificationsGateway {
  constructor(private readonly authService: AuthService) {}

  @WebSocketServer()
  server: Server

  // Мапа для отслеживания активных пользователей и их сокетов
  activeUsers = new Map<number, Socket>()

  sendToAll(message: string) {
    this.server.emit('notification', message)
  }

  async handleConnection(client: Socket) {
    try {
      // Предположим, что токен пользователя передается через строку запроса
      const authToken = client.handshake.query.token
      const user = await this.authService.verifyUser(authToken.toString())

      if (!user) {
        client.disconnect()
        return
      }

      // Сохраняем сокет активного пользователя
      this.activeUsers.set(user.id, client)

      /* console.log(this.activeUsers.get(user.id)) */
    } catch (error) {
      client.disconnect() // Отключаем клиента, если токен недействителен
    }
  }

  handleDisconnect(client: Socket) {
    // Удаляем сокет из списка активных пользователей
    this.activeUsers.forEach((socket, userId) => {
      if (socket.id === client.id) {
        this.activeUsers.delete(userId)
      }
    })
  }

  sendToActiveUser(userId: number, notification: Notification) {
    // Отправка сообщения конкретному активному пользователю
    const client = this.activeUsers.get(userId)
    if (client) {
      client.emit('notification', notification)
    }
  }
}
