//template string `` backticks 
const name = "shifa";
const age = 20;
const city = "trichy";
const course= "BCA";

console.log("hello, I am "+ name +" .Im "+ age + ".I am from "+ city + " .I completed bachelor degree " + course + ".")
//hello, I am shifa .Im 20.I am from trichy .I completed bachelor degree BCA.

console.log(`hello, I am ${name} . I am ${age} years old . My native place is ${city} . I completed bachelor degree ${course}`);
//hello, I am shifa . I am 20 years old . My native place is trichy . I completed bachelor degree BCA



//multiline expression  using (\n)
const msg = "shifa\nmugasheena\ncompleted bca degree";
console.log(msg);  //shifa 
                   //Mugasheena
                   //completed bca degree

//multiline  expr   ession using template string  (``)                   
const msg1 = `shifa
Mugasheena
completed bca degree`;
console.log(msg1);//shifa 
                   //Mugasheena
                   //completed bca degree


//using html


function greet(name){
    return `hello ${name}`;
}

let html = `
<div>
<h1>greet(${"shifa"})</h1>
<p>welcome to page</p>
</div>
`;
console.log(html);

 