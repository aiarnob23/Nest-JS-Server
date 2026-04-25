import { NotificationChannel } from "../factory/notification.factory";
import { INotification } from "./notification.interface";

export interface ISubscriber {
    id: string;
    preferredChannel: NotificationChannel;
    update(notification: INotification): Promise<void>;
}

export interface IPullisher {
    subscribe(subscriber: ISubscriber): void;
    unsubscribe(subscriber: ISubscriber): void;
    broadcast(notification: INotification): Promise<void>;
}