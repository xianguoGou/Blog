// 该接口是提供给适配器使用的

export interface ClientInterface {
  method(data: string): void;
}
