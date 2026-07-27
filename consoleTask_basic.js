//CONSOLE TASK
 
console.log(123);//number
console.log("shifa");//string
console.warn("warning");//yellow warning
console.error("wrong");//red error
console.table(["shifa",123,"mugasheena"]);//table format(array)
console.table({name : "shifa" ,lastname: "mugasheena", age : 20 , });//table format(object)


//group ==> log na sigle msg ah print pannu
//groun na athu kulla irukura log ah indent pannu

console.group("User Info");//group start 
console.log("Name: Shifa");
console.log("Course: MERN");
console.groupEnd();  //group end

//ithu outside log
console.log("This is outside the group");


//time start and stop  (intha code run aaga evlo time eduthukunu kaamiku)

console.time("loopTest");   //timer start 
for (let i = 0; i < 100000; i++) {}
console.timeEnd("loopTest"); //timer stop


