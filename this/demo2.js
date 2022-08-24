function say() {
    console.log("这是", this.name);
}

let person1 = {
    name: '罗翔'
}

let person2 = {
    name: '张三'
}

say.call(person1)   //这是 罗翔
say.call(person2)   //这是 张三