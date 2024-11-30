// 后续处理执行无错，新任务的状态为完成，数据为后续处理的返回值
const pro1 = new Promise((resolve, reject) => {
    console.log('学习')
    reject(1)
})
const pro2 = pro1.catch((error) => {
    console.log('学习失败了:', error)
    return 222
})

setTimeout(() => {
    console.log(pro2)
}, 1000)