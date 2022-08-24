class MyPromise {
    constructor(executer) {
        this.initValue()
        this.initBind()

        try {
            executer(this.resolve, this.reject)
        } catch (err) {
            this.reject(err)
        }
    }

    initValue() {
        this.PromiseResult = null;
        this.PromiseStatus = 'pending';
        this.onFulfilledCallback = [];
        this.onRejectedCallback = [];

    }

    initBind() {

        // 因为class xxx{}中的代码都是严格模式的。等于是自动加上"use strict"
        // 在严格模式下禁止this指向全局对象（window）。
        this.resolve = this.resolve.bind(this)
        this.reject = this.reject.bind(this)
    }

    resolve(value) {

        if (this.PromiseStatus !== 'pending') return;

        this.PromiseResult = value;
        this.PromiseStatus = 'fulfilled';

        while (this.onFulfilledCallback.length) {
            this.onFulfilledCallback.shift()(this.PromiseResult)
        }
    }

    reject(reason) {
        if (this.PromiseStatus !== 'pending') return;
        this.PromiseResult = reason;
        this.PromiseStatus = 'rejected';

        while (this.onRejectedCallback.length) {
            this.onRejectedCallback.shift()(this.PromiseResult)
        }

    }

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val;
        onRejected = typeof onRejected === 'function' ? onRejected : val => val;



        var thenPromise = new MyPromise((resolve, reject) => {

            const resolvePromise = callback => {



                let callbakcResult = callback(this.PromiseResult)
                if (callbakcResult instanceof MyPromise) {

                    callbakcResult.then(resolve, reject)
                } else {
                    resolve(callbakcResult)
                }

            }


            if (this.PromiseStatus === 'fulfilled') {

                // onFulfilled(this.PromiseResult)
                resolvePromise(onFulfilled)

            } else if (this.PromiseStatus === 'rejected') {

                // onRejected(this.PromiseResult)
                resolvePromise(onRejected)


            } else if (this.PromiseStatus === 'pending') {

                //这里的bind(this)确保是改变的thenPromise中的状态，而不去改变其他promise状态
                this.onFulfilledCallback.push(resolvePromise.bind(this, onFulfilled))
                this.onRejectedCallback.push(resolvePromise.bind(this, onRejected))

            }


        })


        return thenPromise
    }




}

export default MyPromise