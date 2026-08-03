//function with parameter

function greet(name){
    console.log(`hello ${name}`);
}
greet("shifa Mugasheena");

//function with return value

function add(a,b){
    return a+b;
}
let result = add(20,30);
console.log(result);

//closure funtion inner and outer function 

function outer(){
    var b = 10;

    function inner(){
        var a = 25;
        console.log(a+b);
    }
    return inner;
}
let innerfunction = outer();
innerfunction(); //35


//arrays

let color = ["red" , "orange" , "white"];
console.log(color);


let color1 = new Array('red' , 'orange',"white");
console.log(color1);