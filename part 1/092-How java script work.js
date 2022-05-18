//how javaScript work?


//compilation
//code excution

//why compilation

//how javascript code execute

//what is global execution context?
//what is local execution context?
//closures

//javascript is a synchronous programming language. means it execute code one by one.
// untill the firstline get executed 2nd line execution wont start. 
/* --------------------------------------------------------------------
In javascript the code 
1. compile the code 
2. the execute the code
------------------------compilation-------------
compilation has three phase
1. Tokenizing/ lexing
2. parsing
3. code generation

1.Tokenizing/ lexing: - our whole code divided into some smaller pieces. all those 
small pieces are know as tokens.

2. parsing: - in these phase javascript check and understand all those tokens and
create an abstruct syntax trees(AST).

3. code generation: - with help of Abstruct syntax Tree,executable code is generated.


2. Code Execution: - The JavaScript code get executed inside execution context.
the very first created context is known as global execution context.
global creation context has two phase
1. creation phase 
2. code execution phase.
*/

//why we need to compile?
/*
ans:-
Ecma official does not mention for compiler. but they mention two things:-
1. Early error checking.
2. determining appropiate scope for variable.
to achieve this two thing we must parsing our code. so for that different browser
use different technique.


2.
*/
//before executing our code compile first.
console.log(this);
console.log(window);
console.log(firstname);
var firstname = "prallad"; 

//1. Early error checking
// var firstname = ."prallad"; //Uncaught SyntaxError: Unexpected token '.'
//so before executing first line it compile and check the syntax error.

//before executing our code compile first.

//2. determining appropiate scope for variable.
//before executing javascript should know the scope of the variables.
//if any variable does not belong to a function then it is in global scope.











