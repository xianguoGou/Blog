// 实现 Replace<S, From, To> 将字符串 S 中的第一个子字符串 From 替换为 To 。

type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends '' ? S : S extends `${infer left}${From}${infer right}`? `${left}${To}${right}` : S

// 示例
type replaced = Replace<'types are fun!', 'fun', 'awesome'> // 期望是 'types are awesome!'

// 执行顺序：
  // 第一步
  // S = 'types are fun!', From = 'fun', To = 'awesome'
  // From extends ''结果为false，然后执行 S extends `${infer left}${From}${infer right}`
  // 第二步
  // 找到From参数（'fun'）位置，然后通过infer参数把字符串分割为 'types are ' 'fun' '!',分别对应infer left、From、infer Right
  // 第三步
  // S extends `${infer left}${From}${infer right}` 结果为true，然后拼接字符串，所以结果为`types are awesome!` 