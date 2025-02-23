console.log('worker 执行了');
// export const age = 10
self.onmessage = function(e) {
    console.log('worker收到外部传来的消息：', e.data);
    self.postMessage(e.data + ' world!');
}