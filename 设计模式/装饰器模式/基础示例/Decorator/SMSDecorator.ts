import { BaseDecorator } from "./BaseDecorator";
import { INotifier } from "../Interface";

export class SMSDecorator extends BaseDecorator {
  private phoneNumber: string;
  constructor(notifier: INotifier, phoneNumber: string) {
    super(notifier);
    this.phoneNumber = phoneNumber;
  }
  // 部分重写父类的 send 方法
  send(message: string): void {
    super.send(message);
    console.log(`Sending SMS to ${this.phoneNumber}: ${message}`);
  }
}
