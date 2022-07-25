// 实现 TrimLeft<T> ，它接收确定的字符串类型并返回一个新的字符串，其中新返回的字符串删除了原字符串开头的空白字符串。


// 拆分字符串原来可以这么玩：${' ' | '\n' | '\t'}${infer R}
type TrimLeft<S extends string> = S extends `${' ' | '\n' | '\t'}${infer R}` ? TrimLeft<R> : S

type str = '  Hello World  '
// 示例
type trimed = TrimLeft<str> // 应推导出 'Hello World  '

// 以此类推，去除字符串右边空白字符
type TrimRight<S extends string> = S extends `${infer L}${' ' | '\n' | '\t'}` ? TrimRight<L> : S


// 去除字符串左右两边空白字符
// 方法一
// type Trim<S extends string> = TrimLeft<TrimRight<S>>
// 方法二
type Trim<S extends string> = S extends `${ ' ' | '\n' | '\t'}${infer R}` | `${infer R}${' ' | '\n' | '\t'}` ? Trim<R> : S

// 示例代码
type trimed1 = Trim<str>