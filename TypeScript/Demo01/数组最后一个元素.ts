// 方法一（通过...T将T解构生成一个元组）
// type Last<T extends any[]> = [any, ...T][T['length']]

// 方法二（通过infer推断出最后一个变量）
type Last<T extends any[]> = T extends [...infer L, infer R] ? R : never;

type arr_1 = ['a', 'b', 'c']
type arr_2 = [3, 2, 1]

type tail1 = Last<arr1> // expected to be 'c'
type tail2 = Last<arr2> // expected to be 1