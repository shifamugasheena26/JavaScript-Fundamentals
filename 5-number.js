//number 
const num1 = 100;
const num2 = 50;

let val;
console.log(val); //undefined


//simple  Math with numbers
val = num1 + num2 ; //150
val = num1 - num2 ; //50
val = num1 * num2 ; //5000
val = num1 / num2 ; //2
val = num1 % num2 ; //0

console.log(val);

//Math Object (.)

val = Math.PI;  //PI value = 3.141592653589793
console.log(val); //3.141592653589793

val = Math.round( 2.6);  //3 (round panniru)
val = Math.round (2.4);   //2
val = Math.ceil(2.1);  //3(upper)
val = Math.floor(2.9);  //2(lower)
val = Math.sqrt(64);  //8  (8*8=64)
val = Math.abs(-5)//5 absolute (-)-->(+);
val = Math.min(-5,3,54,67,23,12)//-5
val = Math.max(-5,3,54,67,23,12)//67
val = Math.random()//0.6609707364568677   refresh panna panna change aagum 
val = Math.floor(Math.random() * 10 ); // floor na lower aprm random na decimal remove panniru final la 10 kulla random num return pannu 4 , 6 , 2 , 9


console.log(val);


//String

const firstName = "Shifa";
const lastName = "Mugasheena";

let val1;
val1 = firstName + lastName;  //ShifaMugasheena
val1 = firstName + " " + lastName; //Shifa Mugasheena

console.log(val1);  //ShifaMugasheena


//append  
val =  "John";
val = val;
console.log(val); //John

// val = val + " Doe ";//John Doe
val += " Doe ";  //John  Doe
console.log(val);  

//length
val = firstName.length;
console.log(val); //5

//concat
val = firstName.concat(" "  , lastName);
console.log(val);  //Shifa Mugasheena  
//this concat  same as concatenation concat-function use , concatenation - normal

// case change 
 val = firstName.toUpperCase();//SHIFA
 val = firstName.toLowerCase();//shifa
 console.log(val);

 //get the index of value 
  val = firstName[0]// s
  val = firstName[2]// i
  console.log(val);
  

  //charAt()

  val = firstName.charAt(3); //f
  console.log(val);

  //slice

  const fruit = "orange";      // o r a n g e
  val = fruit.slice(1,4);//ran    0 1 2 3 4 5
  console.log(val);             // (1 2 3)

console.log(fruit); //orange original no change

//split 
const tags = "web Dev , App Dev , UI/UX";
val = tags;
val = tags.split();//['web Dev , App Dev , UI/UX']
val = tags.split("");// ['w', 'e', 'b', ' ', 'D', 'e', 'v', ' ', ',', ' ', 'A', 'p', 'p', ' ', 'D', 'e', 'v', ' ', ',', ' ', 'U', 'I', '/', 'U', 'X']
val = tags.split(" ");//['web', 'Dev', ',', 'App', 'Dev', ',', 'UI/UX']
console.log(val);

//replace 
const str = "Hello my name is shifu"
val = str.replace("shifu" , "shifa");
console.log(val); //Hello my name is shifa

//Include ( iruka ilaya nu check pannu)

val = str.includes("shifu");
val = str.includes("xyz");//false
console.log(val);  //true




