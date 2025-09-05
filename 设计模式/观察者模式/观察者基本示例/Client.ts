import { Subject } from "./Subject";
import { EmailNotificationListener } from "./EmailNotificationListener";
import { LogNotificationListener } from "./LogNotificationListener";

// 创建一个发布者（商店）
const subject = new Subject();

// 再创建两个观察者实例（有需求的顾客）
const emailListener = new EmailNotificationListener();
const logListener = new LogNotificationListener();

// 接下来发布者需要添加观察者
// 这一步就相当于顾客订阅了商店的消息
subject.addObserver(emailListener);
subject.addObserver(logListener);

// 商店发布消息，会向所有订阅了商店消息的顾客发送消息
subject.notifyObservers("Hello world!");

// 移除一个观察者
subject.removeObserver(emailListener);
subject.notifyObservers("Breaking news");