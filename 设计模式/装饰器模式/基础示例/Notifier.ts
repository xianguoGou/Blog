import { INotifier } from "./Interface";

export class Notifier implements INotifier {
  private emailAddresses: string[];
  constructor(emails: string[]) {
    this.emailAddresses = emails;
  }
  send(message: string): void {
    // 模拟发送邮件
    console.log(
      `Sending email to ${this.emailAddresses.join(", ")}: ${message}`
    );
  }
}

// const notifier = new Notifier(["123456@qq.com", "7891011@gmail.com"]);
// notifier.send("Hello, world!");
