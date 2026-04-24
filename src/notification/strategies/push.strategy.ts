import { Injectable } from '@nestjs/common';
import { INotificationStrategy } from '../interfaces/notification-strategy.interface';
import { INotification } from '../interfaces/notification.interface';

@Injectable()
export class PushStrategy implements INotificationStrategy {
  async send(notification: INotification): Promise<void> {
    console.log(`[PUSH] To device: ${notification.receiver}`);
    console.log(`[PUSH] Title: ${notification.subject}`);
    console.log(`[PUSH] Body: ${notification.message}`);
  }
}