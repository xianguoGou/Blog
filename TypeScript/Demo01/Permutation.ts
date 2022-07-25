// 实现联合类型的全排列，将联合类型转换成所有可能的全排列数组的联合类型。

// 给定另一个泛型：U。初始值设置为 T，用来保存 T 之前的内容
// 此时在 T extends U 中，U 代表传入的联合类型，例如：'A' | 'B' | 'C'；T 则代表继承 U 的某个值，例如："A" 或 "B" 或 "C"
// 可以理解为：此时的 T 已经不是之前的联合类型了，而是联合类型其中的一个类型，而 U 则是之前的联合类型
// 递归处理剩下的值，需要排除当前已经使用过的 T
type Permutation<T, U = T> = [T] extends [never] ? [] : T extends U ? [T, ...Permutation<Exclude<U, T>>] : []

type perm = Permutation<'A' | 'B' | 'C'>; 
// 输出 ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']