// 1.create an array of 7 days and print the third day
let days= ["monday" , "tuesday" , "wednesday" , "thursday" , "friday" , "saturday" , "sunday"];
//         0           1           2             3              4          5            6
console.log(days[2]);


// 2.write a function to double each number in an array and return new array

function doublearray(arr){
    let result=[];

    for(let i =0;i<arr.length;i++){
        result.push(arr[i] * 2);
    }
    return result;
}
console.log(doublearray([2,3,4])); //4,6,8


//3.Find the maximum number in an array without using Math.max()

function max(arr){
    let maximum = arr[0];

    for(let i = 0; i< arr.length ; i++){
        if(arr[i] > maximum){
            maximum=arr[i];
        }
    }
    return maximum;
}
console.log(max([4,5,6,90,77,29]));


//4.combine two arrays of fruits and remove duplicates

let arr1 = ["apple" ,  "banana"];
let arr2 = ["banana" , "mango"];

// let combine=[arr1 , arr1];  [["apple" , "banana"] , ["banana" , "mango"]]
// let unique = [new Set(combine)]  ==> Set(3)
let combine=[...arr1 ,... arr2];//["apple" , "banana" , "banana" , "mango"]
let unique = [...new Set(combine)]; //==> {"apple" , "banana" , "mango"}
console.log(unique);


//5.remove the first 3 elements from an array using .splice()

const fruits =  ["apple" , "banana" , "cherry" , "mango" , "pineapple"];
//                  0         1          2          3          4  

fruits.splice(0 , 3);
console.log(fruits);//["mango" , "pineapple"]


//6. Add an item to both  the start and end of an array using array methods

let fruit = ["apple" , "mango" , "pineapple"];

fruit.push("orange"); //end la add aagum
fruit.unshift("strawberry");//start la add aagum

console.log(fruit);


//7.count how many times a number appears in an array
 
function countarr(arr,target){
    let count = 0;

    for(let i=0;i<arr.length;i++){
        if(arr[i] === target){
            count++;
        }
    }
    return count;
}
console.log(countarr([1,2,3,2,2,5,3,1,2], 2));

//8.reverse an array and log its element without using .reverse()
//without array format

// function reversearr(arr){
//     let reverse="";
//     for(let i=arr.length-1;i>=0;i--){
//         reverse += arr[i];
//     }
//     return reverse;
// }
// console.log(reversearr([1,2,3,4,5,6]));  ==>654321



//The below  code is array format
function reversearr(arr){
    let reverse=[];
    for(let i=arr.length-1;i>=0;i--){
        reverse.push(arr[i]);
    }
    return reverse;
}
console.log(reversearr([1,2,3,4,5])); //[5,4,3,2,1]

//9.Write a function to return only even numbers from an array

function evenonly(arr){
    
    let even =[];
    for(let i = 0;i<arr.length;i++){
        if(arr[i] %2 == 0){
            even.push(arr[i]);
        }
    }
    return even;
}
console.log(evenonly([1,2,3,4,6])); //[2,4,6]


//10.Rotate the elements of an array to the right by 1 position


function rotateright(arr){
    let last = arr[arr.length-1];
    let rest = arr.slice(0,arr.length-1);

    return[last , ...rest];
}
console.log(rotateright([1,2,3,4,5])); //[5,1,2,3,4]