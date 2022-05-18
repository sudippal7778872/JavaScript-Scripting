//map method
const numbers = [3,5,2,9,4];
function square(number){
     return number * number;
}

const squareNumber = numbers.map(square); 
console.log(squareNumber);
//each time it will pass element one by one. same as foreach
//map method return a new array.that's why it is important. here that is number * number
//but if we does not retun anything by default return  a new array with "undefined" value.
//you can see by commenting return line no 4.

//or we can write the function inside
console.log("---------------------inside function------------");
const sqr = numbers.map(function(number){
    return number * number;
})
console.log(sqr);

///arrow function
console.log("-------------------arrow function------------");
const s = numbers.map((number) =>{
    return number * number;
})
console.log(s);

//we can return index as well
console.log("-----------------------return index----------------");

const squareAndIndex = numbers.map((number,index)=>{
    return `square is number ${number * number} index is ${index}`;
})
console.log(squareAndIndex);

// Real world example
console.log("---------------Real World Example----------------")
const users = [
    {firstname:"prallad", age:23},
    {firstname:"suman", age:23},
    {firstname:"souvik", age:24},
    {firstname:"rakesh", age:24},
]

//we want all the first name in a new array

const fnameArray = users.map((user)=>{
    return user.firstname;
}) 
console.log(fnameArray);



