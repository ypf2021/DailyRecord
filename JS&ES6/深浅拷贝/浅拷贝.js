function shallowCopy(obj) {
    if (typeof obj !== 'object') return;

    //根据obj的类型判断是创建一个数组还是一个函数
    var newObj = obj instanceof Array ? [] : {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key]
            //只拷贝了一层，其余层都是引用
        }
    }
}
