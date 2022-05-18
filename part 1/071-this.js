//this
//the global function of javascript is windows object.
//we can print the function -
console.log(this);
//or
console.log(window);

function myFunc(){
    console.log("hello world");
    console.log(this);
}
//call
//everything will add in window object in java script.
window.myFunc();
//if i use scrict mode this is will be undefined.






