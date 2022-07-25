/**
 * 实现一个接收string,number或bigInt类型参数的Absolute类型,返回一个正数字符串。
 */
// 例如
// type Test = -100;
// type Result = Absolute<Test>; // expected to be "100"

//  返回的是字符串 ；另外`${T}`可以将数字转换成字符串
type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer R}` ? `${R}` : `${T}`

type Num = -20
type Results = Absolute<Num>