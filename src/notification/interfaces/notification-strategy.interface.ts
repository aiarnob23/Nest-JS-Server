import { INotification } from "./notification.interface";

export interface INotificationStrategy {
    send(notificatoin: INotification): Promise<void>;
}