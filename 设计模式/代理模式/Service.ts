import { IService } from "./Interface";

// 提供真实服务的类
export class Service implements IService {
  operation(): void {
    console.log("Service operation called");
  }
}
