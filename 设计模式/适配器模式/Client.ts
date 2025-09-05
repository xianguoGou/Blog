import { ClientInterface } from "./Interface";
import { Service } from "./Service";
import { Adapter } from "./Adapter";

class Client {
  private adapter: ClientInterface;

  constructor(adapter: ClientInterface) {
    this.adapter = adapter;
  }

  execute(xml: string) {
    // 这里我们要进行数据的分析，就需要调用第三方的服务类
    // 但是由于接口数据格式不匹配，我们是无法直接调用服务类的方法的
    // 因此我们将数据传递给适配器，让适配器在做了数据转换之后，再调用服务类的方法
    this.adapter.method(xml);
  }
}

// 创建一个服务类的实例
const service = new Service();
// 创建一个适配器的实例
const adapter = new Adapter(service);
// 创建一个客户端实例
const client = new Client(adapter);
// 调用 execute 方法，传递 XML 格式的数据
client.execute("<data>Stock Data in XML format</data>");