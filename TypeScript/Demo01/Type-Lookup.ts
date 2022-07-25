
// T extends U['type'] 规定类型T是 类型U的type子类型。
// type LookUp<U extends {type: any}, T extends U['type']> = U extends {type: T} ? U : never
// 等价于
type LookUp<U, T> = U extends {type: T} ? U : never


interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type MyDog = LookUp<Cat | Dog, 'cat'> // expected to be `Dog`