export function SMSDecorator(phoneNumber: string): ClassDecorator {
  return function (constructor: Function) {
    const send = constructor.prototype.send;
    constructor.prototype.send = function (message: string) {
      send.apply(this, arguments);
      console.log(`Sending SMS to ${phoneNumber}: ${message}`);
    };
  };
}
