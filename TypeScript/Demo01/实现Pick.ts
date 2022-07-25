
// Pick
type MyPick<T, K extends keyof T> = { [P in K]: T[P]}

// 实例
interface Todo {
  title: string
  description: string
  completed: boolean
}
type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo1: TodoPreview = {
    title: 'Clean room',
    completed: false,
}