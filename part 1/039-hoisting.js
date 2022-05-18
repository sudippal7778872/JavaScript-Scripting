//hoisting
//before declaration we can call a function.it is applicable only in function declaration.
//not applicable in case of function expression.
print();  //valid

function print(){
    console.log("hi");
}



//function expression
printMsg(); //error

const printMsg = function(){
    console.log("hi");
}