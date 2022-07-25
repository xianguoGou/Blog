// 实现一个通用的DeepReadonly<T>，它将对象的每个参数及其子对象递归地设为只读。


type DeepReadonly<T> = {
  readonly [P in keyof T]: keyof T[P] extends never ? T[P] : DeepReadonly<T[P]>
}


// 示例
type X = { 
  x: { 
    a: 1
    b: 'hi'
  }
  y: 'hey'
}

type Todo1 = DeepReadonly<X> // should be same as `Expected`