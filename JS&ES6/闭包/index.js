// function foo() {
//     let a = 1;
//     function bar() {
//         console.log(a)
//     }
//     return bar
// }

// var res = foo()
// console.log(res)

// res()


// var child1;
// var child2;
// function parent() {
//     var x = 1;

//     child1 = function () {
//         console.log(++x)
//     };
//     child2 = function () {
//         console.log(--x)
//     };
// }
// parent();
// child1(); // 2
// child1(); // 3
// child2(); // 2


function createCounter() {
    let counter = 0
    const myFunction = function () {
        counter = counter + 1
        return counter
    }
    return myFunction
}
const increment = createCounter()
const c1 = increment()
const c2 = increment()
const c3 = increment()
console.log('example increment', c1, c2, c3)
