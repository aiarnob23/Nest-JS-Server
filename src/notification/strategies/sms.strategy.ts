import { Injectable } from "@nestjs/common";
import { INotificationStrategy } from "../interfaces/notification-strategy.interface";
import { INotification } from "../interfaces/notification.interface";

@Injectable()
export class SmsStrategy implements INotificationStrategy{
    async send(notification: INotification){
        console.log(`[SMS] To: ${notification.receiver}`);
        console.log(`[SMS] Subject: ${notification.subject}`);
        console.log(`[SMS] Message: ${notification.message}`);
    }
}