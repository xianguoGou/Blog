type Chainable<Prev = {}> = {
  option<K extends string, V>(key: K extends keyof Prev ? never : K, value: V): Chainable<Prev & { [key in K]: V }>
  get(): Prev
}
declare const config: Chainable

const result = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get()

// 期望 results 的类型是：
interface Results {
  foo: number
  name: string
  bar: {
    value: string
  }
}
