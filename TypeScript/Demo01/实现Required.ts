// Required 的作用是将传入的属性变为必选项

type MyRequired<T> = { [P in keyof T]-?: T[P] };

// 我们发现一个有意思的用法 -?, 这里很好理解就是将可选项代表的 ? 去掉, 从而让这个类型变成必选项.
// 与之对应的还有个+? , 这个含义自然与-?之前相反, 它是用来把属性变成可选项的.