// [P in T[number]] 遍历数组
// 对象 key 只能是 number string symbol 类型，所以添加约束
type TupleToObject<T extends readonly (number | string | symbol)[]> = {
  [P in T[number]]: P
}

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
type result = TupleToObject<typeof tuple>