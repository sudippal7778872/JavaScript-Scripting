//closure example

//now we have to track how many time we are calling a function.
function fun1(){
    let counter = 0;
    return function(){
        if(counter < 1){
            console.log("Hi, you are calling me");
            counter++;
        }
        else{
            console.log("hello, i already execute one time.");
        }
    }
}
const answer = fun1();
answer();
answer();
answer();




















