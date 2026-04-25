import { Injectable } from "@nestjs/common";
import { ISubscriber } from "../interfaces/observer.interface";
import { INotification } from "../interfaces/notification.interface";

@Injectable()
export class NotificationPublisher {
    private subscribers: Map<string,ISubscriber> = new Map();

    subscribe(subscriber: ISubscriber): void {
        this.subscribers.set(subscriber.id, subscriber);
        console.log(`[PUBLISHER] Subscriber ${subscriber.id} subscribed to ${subscriber.preferredChannel} channel`);
    }

    unsubscribe(subscriber: ISubscriber): void {
        this.subscribers.delete(subscriber.id);
        console.log(`[PUBLISHER] Subscriber ${subscriber.id} unsubscribed from ${subscriber.preferredChannel} channel`);
    }

    async broadcast(notification: INotification): Promise<void> {
    console.log(`[PUBLISHER] Broadcasting to ${this.subscribers.size} subscribers...`);
    const promises = Array.from(this.subscribers.values()).map((subscriber) =>
      subscriber.update(notification),
    );
    await Promise.all(promises);
  }
}