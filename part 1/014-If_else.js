//if else

let temp = +prompt("please enter your area temperature");
//by default prompt method store input as string. 
// if we want to store as a number we have use '+' sign or Number() Method.
console.log(typeof temp, temp);
if(temp > 40){
    console.log("too hot");
}else if(temp > 30){
    console.log("bit hot");
}else if(temp > 20){
    console.log("comfortable");
}else if(temp > 10){
    console.log("cold");
}else{
    console.log("too cold");
}