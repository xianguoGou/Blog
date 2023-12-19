// 实现一个通用Pop<T>，它接受一个数组T并返回一个没有最后一个元素的数组。
// 思路：
// 通过...infer Rest 拿到最后一项之前的所有数据的集合。
// infer表示待推断的类型变量。
type Pop<T extends any[]> = T extends [...infer Rest, infer L] ? Rest : never

type arr1_ = ['a', 'b', 'c', 'd']
type arr2_ = [3, 2, 1]

type re1 = Pop<arr1_> // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2_> // expected to be [3, 2]
