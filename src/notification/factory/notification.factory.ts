import { Injectable } from "@nestjs/common";
import { EmailStrategy } from "../strategies/email.strategy";
import { SmsStrategy } from "../strategies/sms.strategy";
import { PushStrategy } from "../strategies/push.strategy";

export type NotificationChannel = 'email' | 'sms' | 'push';

@Injectable()
export class NotificationFactory {
    constructor(
        private readonly emailStrategy: EmailStrategy,
        private readonly smsStrategy: SmsStrategy,
        private readonly pushStrategy: PushStrategy
    ){}

    create(channel){
        switch(channel){
            case 'email':
                return this.emailStrategy;
            case 'sms':
                return this.smsStrategy;
            case 'push':
                return this.pushStrategy;
            default:
                throw new Error('Invalid notification channel');
        }
    }
}