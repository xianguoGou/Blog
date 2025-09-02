import { QQDecorator } from "./Decorator/QQDecorator";
import { SMSDecorator } from "./Decorator/SMSDecorator";
import { WeChatDecorator } from "./Decorator/WechatDecorator";
import { Notifier } from "./Notifier";


@QQDecorator("123456")
@WeChatDecorator("duyiEdu")
class ClientNotifier extends Notifier {
  constructor(emails: string[]) {
    super(emails);
  }
}

const clientNotifier = new ClientNotifier(["12345@qq.com","456@gmail.com"]);
clientNotifier.send("Hello, World!");