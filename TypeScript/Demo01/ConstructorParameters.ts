// 构造函数参数的类型
// 参考 Parameters，加上 new 即可

type MyConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) =>  any ? P : never
