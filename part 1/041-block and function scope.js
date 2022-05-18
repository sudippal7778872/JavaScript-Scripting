//block scope and function scope

//let and const are block scope
//var is having function scope

{
    //block1
}

{
    const firstname = "prallad";
    console.log(firstname); //valid because inside the block.
}
// console.log(firstname); //invalid, give error because outside the block.
{
    const firstname = "pal";
    console.log(firstname); //valid
}
/*
here we have same variable we did not get error because first variable scope is upto 
first block.
*/

//function scope
console.log("-------------------function scope-------------------")
{
    var fname = "Balai";
}
console.log(fname);//valid
/*
if we created any variable by var we can access it in our whole program.
*/

// Example
if(true){
    let h="block scope"
}
// console.log(h); //error because outside of block.

if(true){
    var h="function scope"
}
console.log(h);

