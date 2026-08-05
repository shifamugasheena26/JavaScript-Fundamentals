let val;   

val=document;  //  #document  like doctype html , head , body
val=document.all;  //HTMLAllCollection [html, head, body, script, script]
val=document.body; //<body>...</body>
val=document.doctype;  //<!DOCTYPE html>
val=document.domain; //localhost 127.0.0.1
val=document.URL;//http://127.0.0.1:5500/index.html
console.log(val);//undefined