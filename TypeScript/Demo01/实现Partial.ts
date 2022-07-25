
// Partial 作用是将传入的属性变为可选项.
// 使用 keyof 和 in 实现 Partial
type MyPartial<T> = { [P in keyof T]?: T[P] };