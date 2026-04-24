import { INotification } from "../interfaces/notification.interface";

export class PushNotification implements INotification {
    constructor(
        public receiver: string,
        public subject: string,
        public message: string
    ){}
}