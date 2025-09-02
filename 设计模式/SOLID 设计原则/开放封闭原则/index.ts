interface LogStrategy {
  log(message: string): void;
}

// 这里一种日志记录方式对应的就是一个类
class ConsoleLogStrategy implements LogStrategy {
  log(message: string) {
    console.log(message);
  }
}

class FileLogStrategy implements LogStrategy {
  log(message: string) {
    console.log("File log:", message);
  }
}

// 后面如果想要新增新的日志记录方式，只需要去扩展新的类即可

class Logger {
  // 初始化的时候确定日志记录的策略是什么
  constructor(private logStrategy: LogStrategy) {}

  log(message: string) {
    this.logStrategy.log(message);
  }
}

// 这里的 Logger 类是开放的，可以传入不同的日志记录策略，而不需要修改 Logger 类。
const logger = new Logger(new ConsoleLogStrategy());
logger.log("hello world !!");
