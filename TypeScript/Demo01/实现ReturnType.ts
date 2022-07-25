// ReturnType
// infer关键字, 在条件类型语句中, 我们可以用 infer 声明一个类型变量并且对它进行使用,
// 我们可以用它获取函数的返回类型， 源码如下

type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

// 其实这里的 infer R 就是声明一个变量来承载传入函数签名的返回值类型, 简单说就是用它取到函数返回值的类型方便之后使用.

// 示例1
function foo(x: number) {
  return { a: "string", b: x };
}
type fn = MyReturnType<typeof foo>;

// 示例2
const fn = (v: boolean) => {
  if (v)
    return 1
  else
    return 2
}

type a = MyReturnType<typeof fn> // 应推导出 "1 | 2"
