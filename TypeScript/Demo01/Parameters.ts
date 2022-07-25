// 手写Parameters
// Parameters：拿到函数的参数类型，不指定参数就是一个数组
type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => unknown ? P : never;

type T0 = Parameters<() => string>;  // type T0 = []

type T1 = Parameters<(s: string) => void>;  // type T1 = [s: string]

type T2 = Parameters<<T>(arg: T) => T>;   // type T2 = [arg: unknown]


declare function f1(arg: { a: number; b: string }): void;
type T3 = Parameters<typeof f1>;

/* type T3 = [arg: {
  a: number;
  b: string;
}] */

type T4 = Parameters<any>;  // type T4 = unknown[]

type T5 = Parameters<never>;  //  type T5 = Parameters<never>;