import { Module } from "@nestjs/common";
import { NotificationController } from "./notification.controller";
import { NotificationService } from "./notification.service";
import { NotificationFactory } from "./factory/notification.factory";
import { EmailStrategy } from "./strategies/email.strategy";
import { SmsStrategy } from "./strategies/sms.strategy";
import { PushStrategy } from "./strategies/push.strategy";
import { NotificationPublisher } from "./observer/notification-publisher";


@Module({
    controllers:[NotificationController],
    providers:[
        NotificationService,
        NotificationFactory,
        NotificationPublisher,
        EmailStrategy,
        SmsStrategy,
        PushStrategy
    ],
})
export class NotificationModule{}