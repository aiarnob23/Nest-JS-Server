import { Body, Controller, Delete, Param, Post } from "@nestjs/common";
import { NotificationChannel } from "./factory/notification.factory";
import { NotificationService } from "./notification.service";

class SendNotificationDto {
    channel: NotificationChannel;
    receiver: string;
    subject: string;
    message: string;
    constructor(channel: NotificationChannel, receiver: string, subject: string, message: string) {
        this.channel = channel;
        this.receiver = receiver;
        this.subject = subject;
        this.message = message;
    }
}

class BroadcastDto {
    receiver: string;
    subject: string;
    message: string;
    constructor(receiver: string, subject: string, message: string) {
        this.receiver = receiver;
        this.subject = subject;
        this.message = message;
    }
}

class SubscribeDto {
    userId: string;
    preferredChannel: NotificationChannel;
    constructor(userId: string, preferredChannel: NotificationChannel) {
        this.userId = userId;
        this.preferredChannel = preferredChannel;
    }
}


@Controller('notification')
export class NotificationController {
    constructor(private readonly notificationService: NotificationService) { }

    @Post('send')
    async send(@Body() dto: SendNotificationDto): Promise<{ success: boolean, meta?: string }> {
        await this.notificationService.notify(dto.channel, {
            receiver: dto.receiver,
            subject: dto.subject,
            message: dto.message
        });
        return { success: true, meta: `Notification sent to ${dto.receiver} via ${dto.channel}` };
    }

    @Post('broadcast')
    async broadcast(@Body() dto: BroadcastDto): Promise<{ success: boolean }> {
        await this.notificationService.broadcast({
            receiver: dto.receiver,
            subject: dto.subject,
            message: dto.message
        });
        return { success: true };
    }

    @Post('subscribe')
    subscribe(@Body() dto: SubscribeDto): { success: boolean } {
        this.notificationService.addSubscriber(dto.userId, dto.preferredChannel);
        return { success: true };
    }

    @Delete('subscribe/:userId')
    unsubscribe(@Param('userId') userId: string): { success: boolean } {
        this.notificationService.removeSubscriber(userId);
        return { success: true };
    }
}