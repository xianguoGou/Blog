const delay = (duration) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, duration)
    })
}

delay(1000)
    .then(() => {
        console.log('1s 后执行')
        return delay(1000)
    })
    .then(() => {
        console.log('2s 后执行')
        return delay(1000)
    })
    .then(() => {
        console.log('3s 后执行')
    })