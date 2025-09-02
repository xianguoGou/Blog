// 基础的通知器：只能发送邮件通知
import { INotifier } from "./Interface";

export class Notifier implements INotifier {
  private emailAddresses: string[] = [];

  constructor(emails: string[]) {
    this.emailAddresses = emails;
  }

  send(message: string): void {
    // 模拟发送邮件
    console.log(`Email sent to ${this.emailAddresses.join(", ")}: ${message}`);
  }
}
