//important array method 
//foreach
//filter
//map
//reduce

const numbers = [4,3,6,7,8];
function myfun1(number,index){
    console.log(`index is ${index} and number is ${number}`);
}
//now we want to print each element in the array.
for (let i=0; i<numbers.length; i++){
    myfun1(numbers[i],i);
}
//now will do the same through foreach
//foreach
console.log("----------------------foreach-----------------")
numbers.forEach(myfun1) 
//we have to pass the callback function as a parameter in foreach.
// foreach automatically pass the value for callback function's parameter namber and index.
//foreach by default pass number and index.

//or
console.log("-------------or------------");
numbers.forEach(function(number,index){
    console.log(`index is ${index} and number is ${number}`);  
})

/////Real World Example
console.log("---------------Real World Example----------------")
const users = [
    {firstname:"prallad", age:23},
    {firstname:"suman", age:23},
    {firstname:"souvik", age:24},
    {firstname:"rakesh", age:24},
]
//now we want to print user name
users.forEach(function(user){ //each time user contain each element or object
    console.log(user.firstname);
})

console.log("------------- arrow function --------------");
//we can use funtion arrow function here.
users.forEach((user)=>{
    console.log(user.firstname);
})

console.log("-------------using for of loop---------");
for(let user of users){
    console.log(user.firstname);
}



