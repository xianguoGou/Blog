import { BaseDecorator } from "./BaseDecorator";
import { INotifier } from "../Interface";

export class QQDecorator extends BaseDecorator {
  private qqId: string;
  constructor(notifier: INotifier, qqId: string) {
    super(notifier);
    this.qqId = qqId;
  }
  // 部分重写父类的 send 方法
  send(message: string): void {
    super.send(message);
    console.log(`Sending QQ message to ${this.qqId}: ${message}`);
  }
}
