import { Subject } from "./Subject";
import { EmailNotificationListener } from "./EmailNotificationListener";
import { LogNotificationListener } from "./LogNotificationListener";

// 创建发布者
const subject = new Subject();
// 创建观察者1
const emailListener = new EmailNotificationListener();
// 创建观察者2
const logListener = new LogNotificationListener();



// 接下来发布者需要注册观察者
subject.registerObserver(emailListener);
subject.registerObserver(logListener);


// 发布消息，会向所有注册的观察者发送消息
subject.notifyObservers("Hello, world!");

// 移除一个观察者
subject.removeObserver(emailListener);
// 再次发布一条消息
subject.notifyObservers("Goodbye, world!");