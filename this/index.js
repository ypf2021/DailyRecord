class classThis {
    x = 10;
    y = 20;
    consoleX() {
        console.log("this.x = ", this.x)
    }
}

const cls = new classThis()
cls.consoleX()  //this.x =  10