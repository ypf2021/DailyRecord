Function.prototype.bind = function (obj) {
    var _this = this; // 保存调用bind的函数
    var obj = obj || window; // 确定被指向的this，如果obj为空，执行作用域的this就需要顶上喽
    return function () {
        return _this.apply(obj, arguments); // 修正this的指向
    }
};
