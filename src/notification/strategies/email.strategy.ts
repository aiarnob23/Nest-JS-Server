import { Injectable } from "@nestjs/common";
import { INotificationStrategy } from "../interfaces/notification-strategy.interface";
import { INotification } from "../interfaces/notification.interface";

@Injectable()
export class EmailStrategy implements INotificationStrategy{
    async send(notification: INotification): Promise<void>{
    console.log(`[EMAIL] To: ${notification.receiver}`);
    console.log(`[EMAIL] Subject: ${notification.subject}`);
    console.log(`[EMAIL] Message: ${notification.message}`);
    }
}