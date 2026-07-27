//changes check

var a = 10;
a = 20;
console.log(a);  //change aagum a = 20

let b = 10;
b = 30;
console.log(b);  //change aagum b = 30

// const c = 10;
// c= 20;
// console.log(c);   //error varu 

const c = 10;
console.log(c); //10

//block scoping if{} kulla 

if(true){
var a = "var";
let b = "let";
const c = "const";
}
console.log(a); //var
// console.log(b); //error
// console.log(c); //error


//Hoisting (variable declare pandrathuku 
// munnadi atha memory la vaikirathu

console.log(x);
var x = "shifa"; //undefined

// console.log(y);
// let y = "sangeetha";   //error

// console.log(z);
// const z = "sabu";   //error