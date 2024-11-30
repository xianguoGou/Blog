// 后续执行后返回的是一个任务对象， 新任务的状态和数据与该任务对象一致
const pro1 = new Promise((resolve, reject) => {
    console.log('学习')
    resolve()
})
const pro2 = pro1.then(() => {
    return new Promise((resolve, reject) => {
        reject('失败')
    })
})

setTimeout(() => {
    console.log(pro2)
}, 1000)