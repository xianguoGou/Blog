// 微信装饰器

import { INotifier } from "../Interface";
import { BaseDecorator } from "./BaseDecorator";

export class WeChatDecorator extends BaseDecorator {
  private weChatId: string;

  constructor(notifier: INotifier, weChatId: string) {
    super(notifier);
    this.weChatId = weChatId;
  }

  // 部分重写父类的 send 方法
  send(message: string): void {
    // 调用父类的 send 方法
    super.send(message);
    // 在发送完消息之后，再发送一条微信消息
    console.log(`WeChat message sent to ${this.weChatId}: ${message}`);
  }
}
