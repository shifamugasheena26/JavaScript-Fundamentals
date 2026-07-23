//conversion 
//oru type la irunthu innona convert pandrathu 

//NUMBER TO STRING

let val;                              //value va string ah convert pandrom 
val = String(555);                    //string("555"), string('555) kudhta string inga number ah string ah covnert pandrom
console.log(val);                     //555
console.log(typeof val);              //String(convert aagiruchu)



val = String(5+5);
console.log(val); //10
console.log(typeof val);  //string


//BOOLEAN TO STRING

val = String(true);
console.log(val); //true
console.log(typeof val); //string


//ARRAY TO STRING

val = String([1,2,3,4,5]);
console.log(val);  //1,2,3,4,5
console.log(typeof val); //string


//STRING TO NUMBER
//'5' "5"  single or double quotes la integer pota ilal letter iruntha athu string 
val = Number("5");
console.log(val);  //5
console.log(typeof val);  //number


val = Number("5" + "5");
console.log(val); //55 rendu string between + iruku so concatenation

val = Number ("5+5");  //5+5 vathu oru full string so output not a number
console.log(val);  //NaN  


//BOOLEAN TO NUMBER

val = Number(true); // 1
val = Number(false);// 0
val = Number(null); // 0
val = Number("hello"); //NaN(not a number) ithu num illa string
val = Number([1,2,3]); //NaN  ithu num illa array 
console.log(val);

