import { Service } from "./Service";
import { Proxy } from "./Proxy";

const realService = new Service();
const proxy = new Proxy(realService);

// 外界要访问服务的时候，是和代理类打交道的
proxy.operation();  