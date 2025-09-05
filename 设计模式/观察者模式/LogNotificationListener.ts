// 创建一个日志通知订阅者

import { IObserver } from "./Interface";

export class LogNotificationListener implements IObserver {
  update(message: string): void {
    console.log(`Sending log with a message: ${message}`);
  }
}
