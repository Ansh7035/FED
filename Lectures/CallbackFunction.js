
let a = [1,2,3,4,5];

//1.callback function 
a.forEach(myfun) //Callback Function.
function myfun(value,index,arr){
    console.log(value)
}

//2.anonymous function
/*
a.forEach(function(value,index,arr){
    console.log(value)
})
*/
//3.Arrow function
/*a.forEach(value,index,arr) => {
    console.log(value);
}
*/
/*
let count=0;
let i;
for(i=0;i<3;i++){
const interval=setInterval(function(){
    count++;
    console.log("Message: $(count)");
},1000)
clearInterval(interval)}*/