import { INotifier } from "./Interface";
import { SMSDecorator } from "./Decorator/SMSDecorator";
import { QQDecorator } from "./Decorator/QQDecorator";
import { WechatDecorator } from "./Decorator/WechatDecorator";
import { Notifier } from "./Notifier";

// 基础邮件通知
const baseNotifier: INotifier = new Notifier([
  "123456@qq.com",
  "789@gmail.com",
]);
baseNotifier.send("Hello, everyone!");

console.log("----------");

// 短信通知
const smsNotifier: INotifier = new SMSDecorator(baseNotifier, "13800138000");
smsNotifier.send("Hello, everyone!");

console.log("----------");

// 微信通知
const wechatNotifier: INotifier = new WechatDecorator(
  baseNotifier,
  "virgo_gxg"
);

// QQ 和微信通知
const qqAndWechatNotifier: INotifier = new QQDecorator(
  wechatNotifier,
  "569157706"
);
qqAndWechatNotifier.send("Hello, everyone!");
