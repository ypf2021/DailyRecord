Function.prototype.MyApply = function (TargetThis) {

    if (typeof this !== 'function') throw new TypeError('非function')

    TargetThis = TargetThis || window

    TargetThis.fn = this

    let result;
    if (arguments[1]) {
        result = TargetThis.fn(...arguments[1])
    } else {
        result = TargetThis.fn()
    }
    delete TargetThis.fn
    return result
}