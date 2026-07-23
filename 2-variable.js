// 3 TYPES OF VARIABLE IN JAVASCRIPT
//var  let   const

//var
var name = "shifa";
console.log(name);  //shifa

var name = "javid";
name = "ram";
console.log(name);  //ram (last la ullathutha varum)

//INIT VARIABLE(initialize variable)

var greetings;
console.log(greetings);   //value assign pannatha naala (undefined) nu varum

var greetings = "Hlo";
console.log(greetings);  //hlo


//var la start la num iruka koodathu

// var 5star = "choco";
// console.log(5star);  //unexpected token (invalid)


//var la num varala aana start la matum vara koodaathu
var star5 = "choco"
console.log(star5);  //choco


//var la Letters,_ , $ na varum 

//MULTIWORDS(BELOW 5)

// 1- NORMAL CASE
var firstname = "shifamugasheena"  //first nu oru vartha name nu oru varhta itha multiwords
console.log(firstname); //shifamugasheena

// 2- CAMEL CASE ** very important (most of the developer use)
var firstName ="javid"; //first matum small aprm vara words oda first letter capital
console.log(firstName);  //javid

// 3- SNAKE CASE (_)
var first_name = "Arun";
console.log(first_name); //Arun

//4- PASCAL CASE  (used only unique place)
var FirstName = "john";  //ellathoda first letter capital
console.log(FirstName);  //john 

// 5- DOLLAR
var $firstName = "Akash";
console.log($firstName);  //Akash


//let

let newname ;
console.log(newname);  //undefined

let newName ;
newName = "jagan";
newName = "shifa";
console.log(newName);  //shifa

//const

// const anothername;
// console.log(anothername);  //error missing initializer

//const la kandipa value assign pannanu

const anothername="sangeetha";
console.log(anothername);  //sangeetha

// const another = "shifa";
// another = "rajesh";
// console.log(another);  //error (assignment to constant variable)

//console la once assign panta change panna mudiyaathu;

//DIFF REASSIGN & REDECLARE

//REASSIGN
var x ="shifa";
x="123";
console.log(x);   //123


//REDECLARE

var y = "shifa"
var y = "raja";
console.log(y); //raja var thirupi declare pandrom atha redeclare

