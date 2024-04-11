const num={
    a: 10,
    x: () => {
        console.log(this);
    },
};
num.x();
console.log(num.a);
console.log(this.a);