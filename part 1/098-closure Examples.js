//closure example

function hello(x){
    const a = "var1";
    const b = "var2";
    return function(){
        console.log(a,b,x);
    }
}

var answer = hello("argument");
console.log(answer); //function defination
answer(); //var1 var2 argument











