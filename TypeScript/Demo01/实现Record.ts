// Record, 将 K 中所有的属性的值转化为 T 类型
type MyRecord<K extends keyof any, T> = { [P in K]: T };


// 示例
interface TestObj {
  a: string,
  b: number
}
type RecordObj = MyRecord<'x' | 'y', TestObj>