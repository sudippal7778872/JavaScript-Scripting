// //closures

//function can return a function.

// function outerFunction(){
//     function innerFunction(){
//         console.log("Hello World");
//     }
//     return innerFunction;
// }

// const answer = outerFunction();
// console.log(answer);
// answer();

function printFullName(firstname,lastName){
    function printName(){
        console.log(firstname,lastName);
    }
    return printName;
}

const answer = printFullName("prallad","pal");
console.log(answer); //only the function
answer();//prallad pal

/*
here we can see printName() function does not firstName and lastName Varibale. but 
in the console we can seewe got the output. how?

answer:- whenever we return a function from a function, it not only return function,
it's return the other property as well(return the local memory of the outer funtion.).
so thats why we get the firstName and LastName here.

when a function return from a function, then the inner function return with all the 
property of outer function means return with lexical environment.
This is call closures.
*/






