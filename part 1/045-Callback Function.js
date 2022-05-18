//call back Function

function myfun(a){
    console.log(typeof a,a)
}

myfun("abc"); //passes string
myfun([1,2,3]);
myfun(12);
myfun({fname:"prallad",gender:"male"});
/*
so we can see parameter a value and type change according to value pass during call.
*/

//can we passes function during calling?
function myfun2(){
    console.log("inside my function 2");
}

function myfun3(a){ //now a become myfun2() function. we can call it.
    console.log("value of a is ", a) // value of a is the myfun2 function
    a(); //we are calling myfun2 function. if needed we can pass value as well.
}

myfun3(myfun2);  //a parameter will get the value as myfun2 function's defination.


//traditionally in javaScript if we call pass any function to a function's parameter.
// then the name of the parameter will be callback. we can use any variable but 
// conventionally it is callback
//example
console.log("---------------callback-----------------------");
function myfun4(callback){ //now a become myfun2() function. we can call it.
    callback(); //we are calling myfun2 function
}
myfun4(myfun2);


