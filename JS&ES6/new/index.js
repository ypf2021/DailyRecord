function Mynew(father, ...args) {
    var newResult = {};
    Object.setPrototypeOf(newResult, father.prototype)
    let fatherResult = father.call(newResult, args)
    return fatherResult instanceof Object ? fatherResult : newResult
}

// function myNew(Con, ...args) {
//     // 创建一个新的空对象
//     let obj = {};
//     // 将这个空对象的__proto__指向构造函数的原型
//     // obj.__proto__ = Con.prototype;
//     Object.setPrototypeOf(obj, Con.prototype);
//     // 将this指向空对象
//     let res = Con.apply(obj, args);
//     // 对构造函数返回值做判断，然后返回对应的值
//     return res instanceof Object ? res : obj;
//   }
