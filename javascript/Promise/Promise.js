const pro1 = new Promise((resolve, reject) => {
    console.log('学习')
    resolve()
})
// then 方法返回一个新的 promise 对象
const pro2 = pro1.then(() => {
    console.log('考试')
})

const pro3 = pro2.then(() => {
    console.log('出成绩')
})

//
console.log(pro1, pro2, pro3)