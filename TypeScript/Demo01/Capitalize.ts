// 实现 Capitalize<T> 它将字符串的第一个字母转换为大写，其余字母保持原样。

type MyCapitalize<S extends string> = S extends `${infer S}${infer L}` ? `${Uppercase<S>}${L}` : S

// 示例
type capitalized = MyCapitalize<'hello world'> // expected to be 'Hello world'