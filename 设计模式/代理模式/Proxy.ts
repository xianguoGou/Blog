import { IService } from "./Interface";
import { Service } from "./Service";

export class Proxy implements IService {
  // 代理类中包含一个真实服务的引用
  private realService: Service;

  constructor(se: Service) {
    this.realService = se;
  }

  // 对外界的访问进行一个过滤
  checkAccess(): boolean {
    // 这边可以进行一些访问控制的操作
    // ...

    return true;
  }

  // 实现接口中定义的方法
  operation(): void {
    // 这边需要对外界的访问进行一个过滤
    if (this.checkAccess()) {
      // 经过访问控制后，可以调用真实服务的方法
      this.realService.operation();
    }
  }
}
