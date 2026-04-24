import { Body, Controller, Post } from "@nestjs/common";
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

@Controller('notification')
export class NotificationController {
    constructor(private readonly notificationService: NotificationService) { }

    @Post('send')
    async send(@Body() dto: SendNotificationDto): Promise<{ success: boolean }> {
        await this.notificationService.notify(dto.channel, {
            receiver: dto.receiver,
            subject: dto.subject,
            message: dto.message
        });
        return { success: true };
    }
}