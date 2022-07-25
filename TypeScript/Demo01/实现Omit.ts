// Omit (未包含)
// 用之前的 Pick 和 Exclude 进行组合, 实现忽略对象某些属性功能, 源码如下

type MyOmit<T, K> = Pick<T, Exclude<keyof T, K>>

// 使用
type Foo1 = MyOmit<{name: string, age: number}, 'name'> // -> { age: number }