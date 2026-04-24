import { Injectable } from "@nestjs/common";
import { NotificationChannel, NotificationFactory } from "./factory/notification.factory";
import { INotification } from "./interfaces/notification.interface";

@Injectable()
export class NotificationService {
    constructor(private readonly notificationFactory : NotificationFactory){}

    async notify(
        channel: NotificationChannel,
        data:INotification,
    ):Promise<void>{
        const strategy = this.notificationFactory.create(channel);
        await strategy.send(data);
    }
}