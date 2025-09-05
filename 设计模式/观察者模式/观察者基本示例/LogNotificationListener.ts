import { IObserver } from "./Interface";
export class LogNotificationListener implements IObserver {
  update(message) {
    console.log(`Logging the message: ${message}`);
  }
}
