// 装饰器模式的基础类
import { INotifier } from "../Interface";
export class BaseDecorator implements INotifier {
  // 这个基础的装饰器类，是不能够单独使用的
  private wrapper: INotifier;
  constructor(notifier: INotifier) {
    this.wrapper = notifier;
  }
  send(message: string): void {
    this.wrapper.send(message);
  }
}
