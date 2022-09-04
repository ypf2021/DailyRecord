function* xxfn() {
    var n = 1;
    var v = yield 23 + n;
    console.log(v)
    yield ++n;
    yield ++n;

}

var fn = xxfn()
console.log(fn.next())
console.log(fn.next())
console.log(fn.next())
