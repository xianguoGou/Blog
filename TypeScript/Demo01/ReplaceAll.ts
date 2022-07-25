// 你的答案
type ReplaceAll<S extends string, From extends string, To extends string> = 
  From extends "" 
  ? S 
  : S extends `${infer F}${From}${infer Rest}` 
    ? `${F}${To}${ReplaceAll<Rest, From, To>}` 
    : S

type replaced_1 = ReplaceAll<'t y p e s', ' ', ''> // 期望是 'types'

// 执行步骤：(S = 't y p e s', From = ' ', To = '') 
// 第一步：
// From extends "" 结果为false，继续执行 S extends `${infer F}${From}${infer Rest}`
// 第二步：
// 通过infer参数拆分字符串：infer F = 't', From = ' ', infer Rest = 'y p e s'
// 第三步：
// S extends `${infer F}${From}${infer Rest}`执行结果为true，然后继续递归字符串
// 此时`${F}${To}${ReplaceAll<Rest, From, To>}` = `t${ReplaceAll<'y p e s', ' ', ''>}`
// 再执行第一步，以此类推，直到递归结束