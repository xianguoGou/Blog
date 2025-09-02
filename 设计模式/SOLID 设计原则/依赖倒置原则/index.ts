// 抽象层
interface INotification {
  send(to: string, message: string): void;
}

// 具体的实现方式一
class EmailNotification implements INotification {
  send(to: string, message: string) {
    // 实现发送电子邮件的逻辑
    console.log(`Sending email to ${to}`, message);
  }
}

// 具体的实现方式二
class SMSNotification implements INotification {
  send(to: string, message: string) {
    // 实现发送SMS的逻辑
    console.log(`Sending SMS to ${to}`, message);
  }
}

// 无论是哪一种实现方式，都需要实现 INotification 这个接口

// NotificationService 这个不再依赖具体实现类
// 而是依赖 INotification 接口
class NotificationService {
  private notificationMethod: INotification;

  constructor(notificationMethod: INotification) {
    this.notificationMethod = notificationMethod;
  }

  sendNotification(to: string, message: string) {
    this.notificationMethod.send(to, message);
  }
}

// 现在，我们可以创建 NotificationService 的实例，并传入不同的具体实现类，来实现不同的通知方式
const emailNotification = new NotificationService(new EmailNotification());
emailNotification.sendNotification('user1@example.com', 'Hello, world!');

const smsNotification = new NotificationService(new SMSNotification());
smsNotification.sendNotification('user2@example.com', 'Hello, cc!');

