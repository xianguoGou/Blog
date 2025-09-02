// 基础装饰器
// 定义整个装饰器的框架，具体的装饰器需要继承这个类
import { INotifier } from "../Interface";

export class BaseDecorator implements INotifier {
  // 这个基础的装饰器类，是不能够单独使用的
  private wrappee: INotifier;

  // 回头在进行初始化的时候，需要传入一个 INotifier 类型的实例
  // 在课堂的例子中，就是接收具体的渠道（QQ、微信、SMS）
  constructor(notifier: INotifier) {
    this.wrappee = notifier;
  }

  send(message: string): void {
    this.wrappee.send(message);
  }
}
