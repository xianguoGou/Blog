export function WeChatDecorator(weChatId: string): ClassDecorator {
  return function (constructor: Function) {
    const send = constructor.prototype.send;
    constructor.prototype.send = function (message: string) {
      send.apply(this, arguments);
      console.log(`Sending WeChat message to ${weChatId}: ${message}`);
    };
  };
}
