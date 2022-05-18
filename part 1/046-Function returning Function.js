//function returning function

function myfun1(){
    return "hi" // we can return number,string,array,obj
}
let ans = myfun1();
console.log(ans); 

//can we return function from a function? how?
console.log("-------------function returning function----------------------")
function myfun2(){
    function hello(){
        console.log("hello bhai");
    }
    return hello;
}

let answer = myfun2(); //now answer contain the hello function. we can call it.
console.log(answer);
answer();

