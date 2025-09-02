// QQ装饰器

import { INotifier } from "../Interface";
import { BaseDecorator } from "./BaseDecorator";

export class QQDecorator extends BaseDecorator {
  private QQID: string;

  constructor(notifier: INotifier, QQID: string) {
    super(notifier);
    this.QQID = QQID;
  }

  // 部分重写父类的 send 方法
  send(message: string): void {
    // 调用父类的 send 方法
    super.send(message);
    // 在发送完消息之后，再发送一条 QQ 消息
    console.log(`QQ message sent to ${this.QQID}: ${message}`);
  }
}
