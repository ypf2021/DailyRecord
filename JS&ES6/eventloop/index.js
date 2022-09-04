setTimeout(() => {
    console.log(1)
}, 0)

const P = new Promise((resolve, reject) => {
    console.log(2)
    setTimeout(() => {
        resolve()
        console.log(3)
    }, 0)
})

P.then(() => {
    console.log(4)
})
console.log(5)

//2
//5
//1
//3
//4