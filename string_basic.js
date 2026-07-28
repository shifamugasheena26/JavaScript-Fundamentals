//string ==> slice(start ,end) , split(separator) , replace(old , new)
//string is immutable once create panta direct ah change panna mudiyaathu 

let str = "shifa Mugasheena";
//         0123456789012345  //16 length
console.log(str.slice(5,11)); //_Mugas
console.log(str.split()) ; //shifa Mugasheena
console.log(str.split(""));// ['s', 'h', 'i', 'f', 'a', ' ', 'M', 'u', 'g', 'a', 's', 'h', 'e', 'e', 'n', 'a']
console.log(str.replace("a","x")) ; // shifx Mugasheena
console.log(str.replaceAll("a","x")); //shifx Mugxsheenx
console.log(str.toUpperCase());//SHIFA MUGASHEENA
console.log(str.toLowerCase());//shifa mugasheena
console.log(str.length);//16
 

//vowel count 
function vowelcount(x){

    let vowel="aeiouAEIOU";
    let count = 0;

    for(let i = 0; i<x.length;i++){
        if(vowel.includes(x[i])){
            count++;
        }
    }
    return count;
    }
console.log(vowelcount("shifa")); //2



function reversestr(str){
    let reverse = "";

    for(let i=str.length-1;i>=0;i--){
       reverse += str[i];
    }
    return reverse;
}
console.log(reversestr("shifa"));