// 共享传递
var obj = {
    value: 1
};
function foo(o) {   //o是一个地址的拷贝，这个地址的拷贝并没有影响到外部的对象
    o = 2;
    console.log(o); //2
}
foo(obj);
console.log(obj.value) // 1


// 引用传递
var group = {
    num: 10
}
function func(obj) {
    obj.num += 10;  //这个相当于是改变了房间的钥匙
    console.log('obj:', obj);
}
func(group); // { num: 20 }
