//string to number

//number to string
let a = String(2);
console.log(a);
console.log(typeof a); //string

let b = Number("5");
console.log(b);
console.log(typeof b); //number

let c = String(10+3);
console.log(c);
console.log(typeof c); //String 13


let d = Number("5" + "5");
console.log(d); 
console.log(typeof d); //number 55

//normal boolean
let s1 = true;
console.log(s1);
console.log(typeof s1); //boolean


//boolean to string
let s2 = String(true);
console.log(s2);
console.log(typeof s2); // string


// Boolean conversions
console.log(Boolean(1));   // true
console.log(Boolean(0));   // false
console.log(Boolean(""));  // false
console.log(Boolean("hi"));//true
console.log(Boolean()); //false


//implicit conversion 

console.log("5" + 1);   // "51" - string + number -> string aagum
console.log("5" - 1);   // 4    - string - number -> number aagum
console.log("5" * "2"); // 10   - rendும் string, aana * ku number aagum
console.log(1 + true);  // 2    - true -> 1 aagum
console.log(1 + false); // 1    - false -> 0 aagum


//list all falsy value and log their boolean conversion
let falsyvalues = [0 , "" , false , null , NaN ,undefined];
for(let val of falsyvalues){
    console.log(val , "->" , Boolean(val));
}

//output
// 0 '->' false
// ""-> false
// false '->' false
// null '->' false
//  NaN '->' false
// undefined '->' false