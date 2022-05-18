//reduce
const numbers = [1,2,3,4,5,10];
const ans = numbers.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
})
console.log(ans);
//reduce function has two parameters.
//first time accumulator parameter's value will be value of 0th index.
//first time currentValue parameter's value will be value 1th index.
//then
//2nd time accumulator parameter's value will be the value of return value.
//2nd time currentValue parameter's value will be the value next or 2nd index value.
//then
//3rd time accumulator parameter's value will be the value of return value.
//3rd time currentValue parameter's value will be the value next or 3nd index value.

//value of parameter according to our array
// accumulator                 currentValue                   return
// 1  (0th index value)        2  (1st index value)            3 (accumulator+currentValue)
// 3  (return value)           3  (2nd index value)            6
// 6  (return value)           4  (3rd index value)            10
// 10                          5                               15
// 15                          10                              25
//this way it is working.

//we can initialize the parameter value
console.log("------------------initialize value---------------------");

const sum = numbers.reduce((accumulator,currentValue)=>{
    return accumulator+ currentValue;
},100) //by this we can initialize parameter value. 
//100 will assigned to accumulator.
console.log(sum);






