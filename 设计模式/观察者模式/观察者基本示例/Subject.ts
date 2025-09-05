// 这是一个发布者
// 内部需要维护一个观察者列表
// 以及添加、删除、通知观察者
import { IObserver } from "./Interface";

export class Subject {
  private observers: IObserver[] = [];

  // 添加观察者
  public addObserver(observer: IObserver): void {
    this.observers.push(observer);
  }

  // 删除观察者
  public removeObserver(observer: IObserver): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  // 当事件发生的时候，我需要通知所有的观察者
  public notifyObservers(message: string): void {
    for (const observer of this.observers) {
      // 调用观察者自身的更新方法
      observer.update(message);
    }
  }
}
