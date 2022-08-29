var throttle = function (func, waittTime) {
    var _this, args;
    var prev = 0
    return function () {
        var now = 0;
        _this = this;
        if (now - prev > wait) {
            func.apply(_this, arg); // 允许传入参数，并修正this
            prev = now; // 更新上一次触发的时间
        }
    }
}

oWrapper.onmousemove = throttle(moveAction, 1000);