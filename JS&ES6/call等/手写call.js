Function.prototype.MyCall = function (TargetThis) {


    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }

    //首先判断传入的第一个参数，如果这个参数为null  或者 undefined 的话
    TargetThis = TargetThis || Window

    TargetThis.fn = this

    const args = [...arguments].slice(1)

    const result = TargetThis.fn(...args)   //运行比记录返回值

    delete TargetThis.fn

    return result
    // console.log(result);
}