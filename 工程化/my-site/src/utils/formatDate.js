// 格式化日期
export default function formatDate(timestamp, isTime = false) {
    const date = new Date(+timestamp)
    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    let str = `${year}-${month}-${day}`
    if (isTime) {
        const hour = date.getHours().toString().padStart(2, '0')
        const minute = date.getMinutes().toString().padStart(2, '0')
        const second = date.getSeconds().toString().padStart(2, '0')
        str += ` ${hour}:${minute}:${second}`
    }
    return str
}