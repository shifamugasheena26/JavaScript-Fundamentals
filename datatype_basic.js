//Datatypes
//Primitive = direct store  ==> string , number, null, boolean , undefined
//reference = memory address la store aagum  ==> array , object ,function 

//type check(typeof behaviour)

console.log(typeof 123);//number
console.log(typeof "shifa");//string
console.log(typeof true);//boolean
console.log(typeof null);//object (js old bug)
console.log(typeof undefined);//undefined

console.log(typeof ["shifa" , 123]); //ithu array but type is object
console.log(typeof {name:"shifa" , age:20}); //ithu object so type also object
console.log(typeof function(){});  //function


//== vs ===
//== value check
//=== value and type check

console.log(5 == "5");   // true (value mattum check, type ignore)
console.log(5 === "5");  // false (value + type rendum check)
console.log(null == undefined);  // true
console.log(null === undefined); // false



//deep nested loop task

const person = {
    name : "shifa",
    age : 20 ,
    address :{
        city : "trichy",
        pincode:{
            code:620001
        }
    }
}


console.log(typeof person); //object
console.log(typeof person.name); //string
console.log(typeof person.age)//number
console.log(typeof person.address); //object nested
console.log(typeof person.address.city)//string
console.log(typeof person.address.pincode)//object nested
console.log(typeof person.address.pincode.code);//number

// console.log(typeof person.pincode); //undefined
// console.log(typeof person.code);//undefined    so proper ah kudukanu

//number to string
let a = String(2);
console.log(a);
console.log(typeof a); //string

