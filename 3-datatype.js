// data- 2 types 1.primitive , 2.reference

//primitive type
//1.String 2.number 3.boolean 4.null 5.undefined

//string

const name = "shifa";
console.log(name);  //shifa  itha shifa nu solla koodathu (string) nu data type ah sollanu
console.log(typeof name) //string

//number

const pincode = 12345;
console.log(pincode);  //12345
console.log(typeof pincode); //number


//boolean 
const hadDinner = true;
console.log(hadDinner); //true
console.log(typeof hadDinner); //boolean


//null
const  box = null;
console.log(box);  //null
console.log(typeof box);  //object 


//undefined

let undef;
console.log(undef);   //undefined
console.log(typeof undef); //undefined 

//mela ellathuku const ithu ku matum let why? const ku kandipa oru value assign pannanu so athunaala tha undefinded naala let use pannom 


//reference types

//1.arrays 2.object (object) is very important in js

//1.array

const arr = ["raja" , 123 , true];
console.log(arr);  //['raja',123,true]
console.log(typeof arr); //object

//2.Object 
// Key : value pairs and .

//arr la [ name , 123 , true ] ella square bracket 
//obj la { name , 123 , true } ella curly braces

const car = {
    name:"BMW",
    color:"black",
    model:"x1",
    year:2024
}
console.log(car); //{name:'BMW', color:'black' ,model:'x1' , year:2024}
console.log(typeof car); //object

//array , object --> rendumey object type
