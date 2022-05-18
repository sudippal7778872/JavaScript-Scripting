//synchronous programming and as synchronous programming

// synchronous programming execute one by one
// javaScript is single threaded synchronous programming language. 
// console.log("script start");
// for(let i=0; i<=10000; i++){
//     console.log("printing loop");
// }
// console.log("script end");



//setTimeout()
//this function takes a function as an arguments. and second parameter is minimum 
// delay time in milisecond.
// console.log("script start");
// function hello(){
//     console.log("hello world");
// }
// setTimeout(hello,1000);
// console.log("script end");

//arrow function
// console.log("script start");

// setTimeout(() =>{
//     console.log("hello world");
// },1000);
// console.log("script end");

/*
o/p:-script start
     script end
     hello world
why hello world comes at the end?

beacuse callback function wait untill the global execution context(GEC) bacame free from
other execution. till then it will wait in callback queue. 
*/

// example 2:-
// console.log("script start");

// setTimeout(() =>{
//     console.log("hello world");
// },0); 
// for(let i =0; i<100; i++){
//     console.log("hello");
// }
// console.log("script end");

// callback function will wait in callback queueuntill the other work finish in GEC.
/*
o/p:-   script start
        hello
        script end
        hello world
*/

// exapmle 3: now we does not want to run callback function of setTimeout()
//setTimeout function get or return an id.
console.log("script start");

let id = setTimeout(() =>{  //storing the id into a variable.
    console.log("inside time out");
},1000); 
for(let i =0; i<100; i++){
    console.log("hello");
}
console.log("the id of setTimeout() is ",id);
console.log("clearing the time out")
clearTimeout(id);
console.log("script end");









