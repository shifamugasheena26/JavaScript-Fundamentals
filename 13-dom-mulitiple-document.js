const item = document.getElementByClassName(".head");

//loop
for(let i = 0;i<item.length;i++){
    console.log(item[i]);
}


//for each loop

//convert html collection into array
let item1 = Array.from(item);

item1.ForEach(function(element,index ,array))
{
    console.log(element , index , array);
}


//own foreach loop

function customForEach(array,callback){
    for(let i=0;i<array.length;i++){
        callback(array[i], i , array);
    }
}
const colors = ["red" , "blue" , "yellow"];
customForEach(colors,function(element, index, array)){
    console.log(element, index , array);
}

//// Output:
// apple 0 ["apple", "mango", "banana"]
// mango 1 ["apple", "mango", "banana"]
// banana 2 ["apple", "mango", "banana"]

//callback la array[i]==> apple mango banana
            //      i ==>  0 1 2
            //   array ==> ["apple", "mango", "banana"]



            //document.querySelectorAll();

            const list = document.querySelectorAll(".head");
            console.log(list);