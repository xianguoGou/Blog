// 邮件通知
import { IObserver } from "./Interface";

export class EmailNotificationListener implements IObserver {
  public update(message: string): void {
    console.log(`Sending email with a message: ${message}`);
  }
}
