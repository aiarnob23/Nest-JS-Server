import { Injectable } from "@nestjs/common";
import { NotificationChannel, NotificationFactory } from "./factory/notification.factory";
import { INotification } from "./interfaces/notification.interface";
import { NotificationPublisher } from "./observer/notification-publisher";
import { ISubscriber } from "./interfaces/observer.interface";
import { UserSubscriber } from "./observer/user-subscriber";

@Injectable()
export class NotificationService {
    constructor(
        private readonly notificationFactory : NotificationFactory,
        private readonly publisher: NotificationPublisher,
    ){}

    // send notification to a specific user
    async notify(
        channel: NotificationChannel,
        data:INotification,
    ):Promise<void>{
        const strategy = this.notificationFactory.create(channel);
        await strategy.send(data);
    }

    // send notification to all subscribers
    async broadcast(notification: INotification): Promise<void>{
        await this.publisher.broadcast(notification);
    }

    //add subscriber
    addSubscriber(
        id: string,
        preferredChannel: NotificationChannel,
    ): void {
        const subscriber = new UserSubscriber(
            id,
            preferredChannel,
            this.notificationFactory,
        );
        this.publisher.subscribe(subscriber);
    }

    //remove subscriber
    removeSubscriber(subscriber: ISubscriber): void {
        this.publisher.unsubscribe(subscriber);
    }

}