// Exclude
type MyExclude<T, U> = T extends U ? never : T;
// 以上语句的意思就是 如果 T 是 U 的子类型的话，那么就会返回 never，否则返回 T

type DO1 = Exclude<"a" | "b" | "c" | "d", "a" | "c" | "f">; // "b" | "d"


// 相反可以得出Extract的源码
// 从 T 中提取出 U
type MyExtract<T, U> = T extends U ? T : never;

// 示例
type Example2 = {
  a: number
  b: string
}
type TestExample2 = MyExtract<"1" | "2", "2">