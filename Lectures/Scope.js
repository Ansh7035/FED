/*let a=10;
var b=20;
const c=30;
console.log(a);
console.log(b);
console.group(c);*/
{
    let a=20;
    console.log("1st a = "+a);
    const b=50;
    console.log("1st b = "+b);
    //b=1;  Error
}
a=10;
b=55;
console.log("2nd a = "+a);
console.log("2nd b = "+b);