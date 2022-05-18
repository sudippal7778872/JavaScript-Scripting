//sort 

const numbers = [2,43,7,5,62,90,13,5];
const users = ["prallad","suman","rakesh","souvik","swapna"];
numbers.sort();
// It does not resturn new array. it will change the original array.
console.log(numbers); //it will sort the number as a string. accoding to ascii value.
// It first convert all the numbers into string and then sort
users.sort()
console.log(users); //getting expected result

// For number sorting we have to pass callback function.

numbers.sort((a,b) => {
    return a-b;
})
// or we can write in short
numbers.sort((a,b) => a-b);
console.log(numbers);

//if we need decending order we write b-a
console.log("-----------------decending-------------");
numbers.sort((a,b) => b-a);
console.log(numbers);




