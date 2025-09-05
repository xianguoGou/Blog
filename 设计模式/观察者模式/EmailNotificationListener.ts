// 创建一个邮件通知订阅者
import { IObserver } from "./Interface";

export class EmailNotificationListener implements IObserver {
  update(message: string): void {
    console.log(`Sending email with a message: ${message}`);
  }
}
