function fn() {
    var name = "余光";
    function childFn() {
        console.log(name);
    }
    childFn(); // 余光
}
console.log(name); // name is not defined

var scope = "global scope";
function checkscope1() {
    var scope = "local scope";
    function f() {
        return scope;
    }
    return f(); // 注意
}
checkscope1();  //local scope


var scope = "global scope";
function checkscope2() {
    var scope = "local scope";
    function f() {
        return scope;
    }
    return f;
}
checkscope2()();    ////local scope