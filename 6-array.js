//Reference type (array)

const numbers = [2,43,5,92,87];
let val;
//get array length 
val = numbers.length; // 5

//check if it is array
val = Array.isArray(numbers); //true

//get the index  value
val = numbers[0]; //2
val = numbers[4]; //87

//get the last index
val = numbers[ numbers.length-1]; //87

//change into array index value
val = numbers[2];  //100
 
//find the index of value 
val = numbers.indexOf(92); //2
val = numbers.indexOf(888); // -1 
//array match aana return pannu illana -1 return aagum

console.log(val);

//mutating array(mutable)

let num = [ 2,3,4,5,6];

//add the end 
num.push(100);  //[2,3,4,5,6,100];

//add the start
num.unshift(100); //[100,2,3,4,5,6,100]

//remove the end
num.pop();  // [100,2,3,4,5,6]
num.pop();  // [100,2,3,4,5]

//remove the start
num.shift(); //[2,3,4,5]
num.shift(); //[3,4,5]

console.log(num);

//middle la add and remove ku (split)
//split - to add and to remove
//split(start , enga delete pannanunu kuudkanu)

//to remove 

const fruits = ["apple" , "banana" , "orange"]; ////['apple', 'bananba', 'orange']
            //     0          1          2
val = fruits.splice(1,1); // ['apple', 'orange']
  //start  - banana , delete - banana so apple , orange

val = fruits.splice(1,2);
  //start - banana  , delete - orange so apple only 

console.log(fruits);


//to add 

const fruit = ["apple" , "banana" , "orange"];
fruit.splice(2,1,"Mango");//['apple', 'banana', 'Mango']
console.log(fruit); 


//reverse the array 

let a = [ 1,2,3,4,5];
let = a.reverse(); //[5,4,3,2,1]
                   // 0 1 2 3 4

let = a.indexOf(3); // 2 (reverse la ulla index ku ethamaari kudukum )
console.log(let); 


//basic program 

num1 = [2,13,4,25,63,72,8];
//      0 1 2 3 4 5 6

function randomname (array,value){
    for(let i = 0;i <array.length;i++){
        console.log(i);//0 1 2 3 4 5 6
        console.log(num1[i]); //2 13 4 25 63 72 8
    }
}
randomname(num1);


//namma kudukura target num2 la iruka nu paakurom 


function randomname(array,value){
for(let i = 0 ;i < array.length;i++){
    if(array[i] === value)
        return i;
}
return -1;
}
const n = [2,13,4,25,63,72,8];
console.log(randomname(n,63)); //4   because 63 vanthu 4th index la iruku

