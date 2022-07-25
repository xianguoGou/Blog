/* 类似地, 其实还有对 + 和 -, 这里要说的不是变量的之间的进行加减而是对 readonly 进行加减.
以下代码的作用就是将 T 的所有属性的 readonly 移除,你也可以写一个相反的出来.
 */

type Mutable<T> = {
  -readonly [P in keyof T]: T[P]
}

// 示例
type Example1 = {
  readonly text1: string,
  readonly text2: () => any
}

type ResultExample = Mutable<Example1>