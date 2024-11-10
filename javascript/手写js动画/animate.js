function createAnimation(options) {
    var from = options.from; // 起始值
    var to = options.to; // 目标值
    var totalMS = options.totalMS || 1000; // 变化总时间
    var duration = options.duration || 15; // 每次变化时间间隔
    var times = Math.floor(totalMS / duration); // 变化总次数
    var step = (to - from) / times; // 每次变化的值
    var currTimes = 0; // 当前变化的次数
    var timerId = null;
    timerId = setInterval(function() {
        from += step;
        currTimes++; // 当前变化次数+1
        if (currTimes >= times) { // 变化次数达到总次数
            from = to; // 目标值赋值给起始值
            clearInterval(timerId); // 不再变化
            options.onEnd && options.onEnd(); // 执行回调函数
        }
        // console.log(from);
        options.onMove && options.onMove(from); // 执行回调函数
    }, duration)


}


createAnimation({
    from: 0,
    to: 120,
    totalMS: 1000,
    duration: 15,
    onMove: function(val) {
        console.log('回调函数执行了', val);
    },
    onEnd: function() {
        console.log('动画结束了');
    }
})