import { NotificationChannel, NotificationFactory } from "../factory/notification.factory";
import { INotification } from "../interfaces/notification.interface";
import { ISubscriber } from "../interfaces/observer.interface";

export class UserSubscriber implements ISubscriber {
    constructor(
        public id : string,
        public preferredChannel: NotificationChannel,
        private readonly notificationFactory: NotificationFactory,
    ){}

    async update(notification: INotification):Promise<void>{
        const strategy = this.notificationFactory.create(this.preferredChannel);
        await strategy.send(notification);
    }
}