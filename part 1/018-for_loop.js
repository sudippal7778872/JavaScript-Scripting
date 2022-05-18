//for loop
//print 1 to 10

for (let i=0; i<=10; i++){
    console.log(i);
}
// console.log(i); //error
/*
variable created with 'let' scope is only on loop. outside of loop it is not exist.
but variable created with var keyword exists out side of loop. 
*/
for (var j=0; j<=10; j++){
    console.log(j);
}
console.log(j);

