// 适配器类
import { Service } from "./Service";
import { ClientInterface } from "./Interface";

export class Adapter implements ClientInterface {
  private service: Service;

  constructor(service: Service) {
    this.service = service;
  }

  // 在适配器里面，提供一个转换方法，将数据转换为 JSON 格式
  // 然后再调用服务类的方法进行分析
  public method(data: string): void {
    console.log("适配器：转换数据为 JSON 格式");
    const jsonData = this.convertData(data);
    // 现在已经有了 JSON 格式的数据了，接下来就调用第三方服务类
    this.service.serviceMethod(jsonData);
  }

  private convertData(data: string): string {
    // 这里是将数据转换为 JSON 格式的代码
    return `{"data": ${data}}`;
  }
}
