import { INotification } from "../interfaces/notification.interface";

export class SmsNotification implements INotification {
    constructor(
        public receiver: string,
        public subject: string,
        public message: string
    ){}
}