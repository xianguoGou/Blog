self.onmessage = function(e) {
    let count = 0
    for (let i = 0; i < e.data ** 8; i++) {
        count += 10
    }
    self.postMessage(count)
}