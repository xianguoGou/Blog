export default function debounce(func, duration= 100) {
    let timer = null;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args)
        }, duration)
    }
}