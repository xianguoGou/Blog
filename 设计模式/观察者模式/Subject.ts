// 这是一个发布者，内部需要维护一个观察者列表，并提供注册、通知、取消订阅的接口。
import { IObserver } from "./Interface";
export class Subject {
  private observers: IObserver[] = [];
  
  // 订阅者注册
  registerObserver(observer: IObserver): void {
    this.observers.push(observer);
  }

  // 当事件发生的时候，需要向所有订阅者发布消息
  notifyObservers(message: string): void {
    this.observers.forEach(observer => observer.update(message));
  }
  // 取消订阅
  removeObserver(observer: IObserver): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

}