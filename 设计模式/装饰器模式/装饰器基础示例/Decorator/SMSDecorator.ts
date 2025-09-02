// SMS装饰器

import { INotifier } from "../Interface";
import { BaseDecorator } from "./BaseDecorator";

export class SMSDecorator extends BaseDecorator {
  private phoneNumber: string;

  constructor(notifier: INotifier, phoneNumber: string) {
    super(notifier);
    this.phoneNumber = phoneNumber;
  }

  // 部分重写父类的 send 方法
  send(message: string): void {
    // 调用父类的 send 方法
    super.send(message);
    // 再调用完父类的 send 方法之后，再完成子类扩展的逻辑
    // 在发送完消息之后，再发送一条 SMS 短信
    console.log(`SMS sent to ${this.phoneNumber}: ${message}`);
  }
}
