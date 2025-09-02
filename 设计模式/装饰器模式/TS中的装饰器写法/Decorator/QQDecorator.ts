export function QQDecorator(qqId: string): ClassDecorator {
  return function (constructor: Function) {
    const send = constructor.prototype.send; // 先拿到原型上面的send方法
    constructor.prototype.send = function (message: string) {
      // 在包装之前要先执行一遍原来的send方法
      send.apply(this, arguments);
      // 然后再扩展自己的逻辑
      console.log(`QQ message sent to ${qqId}: ${message}`);
    };
  };
}
