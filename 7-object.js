//(.) object are key and value pair 

const person = {
    firstName : "shifa",
    lastName : "mugasheena",
    age : 20,
    hadDinner:false,
    email :"sifa123@gmail.com",
    hobbies : ["music", "drawing", "cooking"],
    address : {
        city:"trichy",
        state:"TN"
    },

    //method 
    getFullName : function(){
        return `${this.firstName} ${this.lastName}`
    val = person.getFullName; //shifa mugasheena
    }

    
    //output  :    {firstName: 'shifa', lastName: 'mugasheena', age: 20, hadDinner: false, email: 'sifa123@gmail.com', …}
}
console.log(person);

//object na key value 
let val; 
val = person;
console.log(val); //{firstName: 'shifa', lastName: 'mugasheena', age: 20, hadDinner: false, email: 'sifa123@gmail.com', …}

//get specific value

val = person.firstName; //shifa
val = person["lastName"]; //mugasheena
val = person.age;//20
val = person.email;//sifa123@gmail.com
val = person.hadDinner; //false
val = person.hobbies; //['music', 'drawing', 'cooking']
val = person.address.city; //trichy
console.log(val);

//property ==>  arr,obj,boolean,string ithu ellamey hold pannu

//object ==> function hold panna ==> method nu solluvanga

//example
function test(){
    //ithu oru function 
}

const x = {
    test:function(){
        //ithu function tha aana object kulla irukuranaala ithu methods
    }
}

