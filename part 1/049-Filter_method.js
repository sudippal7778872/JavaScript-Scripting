//Filter method
const numbers = [7,6,4,2,3,7,8];
const isEven = function(number){
    return number % 2  === 0;
}

const ans = numbers.filter(isEven); 
//filter call back funtion always return true value.
//it will create a new array and store only true value.
console.log(ans);

//inside function
console.log("inside function---------------");

const answer = numbers.filter(function(number){
    return number%2===0;
})
console.log(answer);

//arrow function
console.log("----------------arrow function--------------");
const a = numbers.filter((number)=>{
    return number%2===0;
})
console.log(a);







