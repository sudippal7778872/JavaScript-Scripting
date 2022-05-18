//Default parameter
/*
in function call if does not pass the value. it will take the default value.
*/

//previously we handled this situation
function add(a,b){
    if(typeof b === "undefined"){
        b = 0;
    }
    return a+b;
}
let ans = add(4); //passing one value
console.log(ans);
/*if we pass only one value that will assign to first parameter. 
other parameter will be undefined.
or if does not pass any value then both parameter will be undefined.
*/


//default parameter
//will assign default value of parameter. if we do not pass any value it work with
// default value.
function add(a=0,b=0){ //defalut value assigned
    return a+b;
}
let answer = add(); //passing one value
console.log(answer);


