// 计算字符串的长度

//转换成数组 计算长度
type StringToArray<S extends string> = S extends `${infer F}${infer R}` ? [F, ...StringToArray<R>] : []
type LengthOfString<S extends string> = StringToArray<S>['length']

type aaa = LengthOfString<'hello'>