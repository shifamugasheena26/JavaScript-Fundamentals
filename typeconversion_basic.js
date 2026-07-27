//string to number

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