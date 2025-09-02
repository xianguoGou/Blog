import { Notifier } from "./Notifier"; // 只能是发送邮件的形式来进行通知
import { WeChatDecorator } from "./Decorator/WechatDecorator"; // 发送微信通知
import { SMSDecorator } from "./Decorator/SMSDecorator"; // 发送短信通知
import { QQDecorator } from "./Decorator/QQDecorator"; // 发送 QQ 通知

const baseNotifier = new Notifier(["123@qq.com", "456@gmail.com"]);
baseNotifier.send("Hello, World!");
console.log("==================================");

// 接下来需求有变：客户希望发送短信以及微信通知
const smsNotifier = new SMSDecorator(baseNotifier, "13112341234");
const smsAndWechatNotifier = new WeChatDecorator(smsNotifier, "duyiEdu");
smsAndWechatNotifier.send("这是一条非常重要的消息");

console.log("==================================");
// 回头需求又有变化，客户希望再增加 QQ 通知
const allTypeNotifier = new QQDecorator(smsAndWechatNotifier, "123456");
allTypeNotifier.send("这是另外一条非常重要的消息，所有渠道都会收到");