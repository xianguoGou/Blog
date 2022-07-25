
// Readonly， 将传入的属性变为只读选项,
type MyReadonly<T> = {
  readonly [key in keyof T]: T[key]
}

interface Todo2 {
  title: string
  description: string
}

const todo2: MyReadonly<Todo2> = {
  title: "Hey",
  description: "foobar"
}

// todo2.title = "Hello" // Error: cannot reassign a readonly property
// todo2.description = "barFoo" // Error: cannot reassign a readonly property
