type Concat<T extends unknown[], U extends unknown[]> = [...T,...U]

type Num = Concat<[1], [2]>

type Push<T extends any[], U> = [...T, U]

type Result = Push<[1], 'a'>

type Unshift<T extends any[], U> = [U, ...T]

type Result1 = Unshift<[1, '3'], 'a'>

type Includes<T extends any[], U> = U extends T[number] ? true : false

type Result2 = Includes<[2, 'a'], 'a'>