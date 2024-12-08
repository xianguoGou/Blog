// import { isOdd, sum } from './math.js'
import math from './math.js'

// console.log(math.isOdd(2))

// console.log(isOdd(3))
// console.log(sum(1, 5))



// 动态导入
//  setTimeout(() => {
//     import ("./math.js").then(data => {
//         const result = data.default.isOdd(2)
//         console.log(result)
//     })
//  }, 1000)

setTimeout( async () => {
    const data =await import("./math.js")
    const result = data.default.isOdd(2)
    console.log(result)
}, 1000)



