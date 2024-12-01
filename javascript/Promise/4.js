// 下面的代码输出结果是什么？
const pro1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 1000)
})
const pro2 = pro1.catch((data) => {
    console.log(data)
    return data + 1
})

const pro3 = pro2.then(data => {
    console.log(data) // 1
})

console.log(pro1, pro2, pro3) // pending pending pending

/**
 * pro1 fulfilled 1
 * pro2 fulfilled 1
 * pro3 fulfilled undefined
 */


setTimeout(() => {
    console.log(pro1, pro2, pro3)
}, 2000)