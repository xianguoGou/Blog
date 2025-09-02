import { BaseDecorator } from "./BaseDecorator";
import { INotifier } from "../Interface";

export class WechatDecorator extends BaseDecorator {
  private wechatId: string;
  constructor(notifier: INotifier, wechatId: string) {
    super(notifier);
    this.wechatId = wechatId;
  }
  // 部分重写父类的 send 方法
  send(message: string): void {
    super.send(message);
    console.log(`Sending Wechat message to ${this.wechatId}: ${message}`);
  }
}
