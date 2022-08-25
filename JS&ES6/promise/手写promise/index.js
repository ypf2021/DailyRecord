class MyPromise {
    constructor(executor) {
        this.initValue()
        this.initBind()

        try {
            executor(this.resolve, this.reject)
        } catch (e) {
            //捕捉到错误直接执行 reject
            this.reject(e)
        }
    }

    initBind() {
        //bind方法让 this.resolve 的this始终指向的是这个实例
        //bind  传递的第一个参数做为调用它的函数的this指向
        //防止由于环境的问题导致this指向改变
        this.resolve = this.resolve.bind(this)
        this.reject = this.reject.bind(this)
    }

    initValue() {
        this.PromiseResult = null;
        this.PromiseState = 'pending'

        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];

    };

    resolve(value) {

        if (this.PromiseState !== 'pending') return

        this.PromiseState = 'fulfilled';
        this.PromiseResult = value;

        while (this.onFulfilledCallbacks.length) {
            this.onFulfilledCallbacks.shift()(this.PromiseResult)
        }
    };

    reject(reason) {

        if (this.PromiseState !== 'pending') return

        this.PromiseState = 'rejected';
        this.PromiseResult = reason;

        while (this.onRejectedCallbacks.length) {
            this.onRejectedCallbacks.shift()(this.PromiseResult)
        }
    }

    then(onFulfilled, onRejected) {
        // 接收两个回调 onFulfilled, onRejected

        // 参数校验，确保一定是函数
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }


        var thenPromise = new MyPromise((resolve, reject) => {

            const resolvePromise = cb => {
                setTimeout(() => {

                    try {
                        const x = cb(this.PromiseResult)
                        if (x === thenPromise) {
                            // 不能返回自身哦
                            throw new Error('不能返回自身。。。')
                        }
                        if (x instanceof MyPromise) {
                            // 如果返回值是Promise
                            // 如果返回值是promise对象，返回值为成功，新promise就是成功
                            // 如果返回值是promise对象，返回值为失败，新promise就是失败
                            // 谁知道返回的promise是失败成功？只有then知道
                            x.then(resolve, reject)
                        } else {
                            // 非Promise就直接成功
                            resolve(x)
                        }
                    } catch (err) {
                        // 处理报错
                        reject(err)
                    }
                })

            }

            if (this.PromiseState === 'fulfilled') {
                // 如果当前为成功状态，执行第一个回调
                resolvePromise(onFulfilled)
            } else if (this.PromiseState === 'rejected') {
                // 如果当前为失败状态，执行第二个回调
                resolvePromise(onRejected)
            } else if (this.PromiseState === 'pending') {
                // 如果状态为待定状态，暂时保存两个回调
                // 如果状态为待定状态，暂时保存两个回调
                this.onFulfilledCallbacks.push(resolvePromise.bind(this, onFulfilled))
                this.onRejectedCallbacks.push(resolvePromise.bind(this, onRejected))
            }
        })

        // 返回这个包装的Promise
        return thenPromise

    }
}

export default MyPromise