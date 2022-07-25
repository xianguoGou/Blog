// keyof（索引类型） 可以用来取得一个对象接口的所有 key 值, 比如：
interface Foo {
  name: string;
  age: number
}
type T = keyof Foo // -> "name" | "age"

// 而 in(映射类型) 则可以遍历枚举类型, 例如：
type Keys = keyof Foo
type Obj = {
  [P in Keys]: any
}

// keyof 产生联合类型, in 则可以遍历枚举类型, 所以他们经常一起使用。