// 方法一
// type ArrayElement<T extends readonly unknown[]> = T[number];

// 方法二
type ArrayElement_<A> = A extends readonly (infer T)[] ? T : never

type AAA = [1, "2", 3]
type BBB = ArrayElement_<['1', 2]>
const a: BBB = "1"


// 你的答案
type TupleToUnion<T extends any[]> = T[number]


type arr = [123, '456', true]

type aa = arr[number]  // arr[number]  返回得到一个  union 类型   true | 123 | "456"
