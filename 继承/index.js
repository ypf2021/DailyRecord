// 父类
function Animal(name) {
    this.name = name || 'Animal';
    this.sleep = function () {
        console.log(this.name + '正在睡觉')
    };
}

Animal.prototype.eat = function (food) {
    console.log(this.name + '正在吃' + food)
}


//1.原型链继承
// 核心：将父类的实例作为子类的原型
function Dog() { }
Dog.prototype = new Animal()  //将Animal的实例挂载到了子类的原型链上
//或：
// Dog.prototype = Object.create(Animal.prototype)

Dog.prototype.name = 'dog';
var dog = new Dog();
console.log(dog.name)   //dog
console.log(dog instanceof Dog) //true
console.log(dog instanceof Animal) //true
// 特点：

//     非常纯粹的继承关系，实例是子类的实例，也是父类的实例
//     父类新增原型方法/原型属性，子类都能访问的到
//     简单

// 缺点

//     要想为子类新增属性和方法，必须要在new Animal()这样的语句之后执行，不能放到构造器中
//     无法实现继承多个(只能继承一个原型)
//     来自原型对象的所有属性被所有实例共享
//     创建子类实例时，无法向父类构造函数传参




//2.构造继承
//核心：使用弗雷德构造函数增强子类实例，等于是复制父类的实例属性给子类，
function Cat(name) {
    Animal.call(this)
    this.name = name || 'Tom';
}

var cat = new Cat();
console.log(cat.name);		//Tom
cat.sleep();		//Tom正在睡觉！
console.log(cat instanceof Animal);		//false
console.log(cat instanceof Cat);		//true

// 特点：

//     创建子类实例时，可以向父类传递参数(在call后面加入参数)
//     可以实现多继承（call多个父类对象）

// 缺点：

//     实例并不是父类的实例，只是子类的实例
//     只能继承父类的实例属性和方法，不能继承原型属性/方法
//     无法实现函数复用，每个子类都有父类实例函数的副本，影响性能




//3.实例继承
//核心：为父类实例添加新的特性，作为子类实例返回

function Pig(name) {
    var instance = new Animal()
    instance.name = name || 'pig';
    return instance
}

var pig = new Pig()
console.log(pig.name);		//Tom
pig.sleep();			//Tom正在睡觉！
console.log(pig instanceof Animal);		//true
console.log(pig instanceof Pig);		//false
// 特点：

//     不限制调用方式，不管是new子类()还是子类()，返回的对象都具有相同的效果

// 缺点：

//     实例是父类的实例，不是子类的实例
//     不支持多继承



//4.拷贝继承
function Rabbit(name) {
    var animal = new Animal();
    for (let i in animal) {
        Rabbit.prototype[i] = animal[i]
    }
    Rabbit.prototype.name = name || 'Tom'
}
// 特点：

//     支持多继承

// 缺点：

//     效率极低，内存占用高（因为要拷贝父类的属性）
//     无法获取父类不可枚举的方法（for in不能访问到的）

//5.组合继承
//核心：通过调用父类构造，继承父类的属性并保留传参的优点，然后通过符累实例作为子类原型。实现函数复用
function Bird(name) {
    Animal.call(this);
    this.name = name || '蔡徐坤'
}

Bird.prototype = new Animal();
// Bird.prototype.constructor = Bird;
var bird = new Bird();
console.log(bird.name);	//Tom
bird.sleep();		//Tom正在睡觉
console.log(bird instanceof Animal); // true
console.log(bird instanceof Bird); // true


// 特点：

//     弥补了方式2的缺陷，可以继承实例属性/方法，也可以继承原型属性/方法
//     既是子类的实例，也是父类的实例
//     不存在引用属性共享问题(因为指定了this)
//     函数可复用
//     可传参

// 缺点：

//     调用了俩次构造函数，生成了俩份实例（子类实例将子类原型上的那份屏蔽了）



//6.寄生组合继承
//核心：通过寄生方式，砍掉父类的实例属性，这样，在调用俩次父类的构造的时候，就不会初始化俩次实例方法/属性，避免了组合继承的缺点。
function Cat(name) {
    Animal.call(this);
    this.name = name || 'Tom';
}
(function () {
    var Super = function () { };  //创建一个没有实例的方法类。
    Super.prototype = Animal.prototype;
    Cat.prototype = new Super();  //将实例作为子类的原型。
})();

let cat = new Cat();
console.log(cat.name);		//Tom
cat.sleep();		//Tom正在睡觉
console.log(cat instanceof Animal); // true
console.log(cat instanceof Cat); //true

Cat.prototype.constructor = Cat;	//修复构造函数
