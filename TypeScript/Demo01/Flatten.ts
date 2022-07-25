// 需要写一个接受数组的类型，并且返回扁平化的数组类型。

// 你的答案
type Flatten<T extends any[]> =
  T extends [infer First, ...infer Rest]
  ? First extends any[]
    ? Flatten<[...First, ...Rest]>
    : [First, ...Flatten<Rest>]
  : []

type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]>