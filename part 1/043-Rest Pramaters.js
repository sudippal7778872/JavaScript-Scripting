//Rest parameters

/*
in calling time if we pass more value than parameters. then we can store it in the
last parameter through Rest parameter(...). excess value will be store in last 
parameter as an array.
*/
function p(a,b,c){
    console.log("a is ", a);
    console.log("b is ", b);
    console.log("c is ", c);
}
p(12,3,5,1,5,8,8,4); /*in this case apart from first three value other will lost. we can 
store it in array using Rest parameters */


//Rest Parameters
console.log("------------after using rest parameters--------------");
function print(a,b,...c){  //Rest parameters applied on c
    console.log("a is ", a);
    console.log("b is ", b);
    console.log("c is ", c);
    console.log(typeof c);
    console.log(Array.isArray(c));
}
print(12,3,5,1,5,8,8,4);

//Example
//addtion multiple number
console.log("----------------addtion multiple number---------------");
function addition(...numbers){
    let total = 0;
    for(let number of numbers){
        total = total+number;
    }
    return total;
}
console.log(addition(12,3,5,1,5,8,8,4));
