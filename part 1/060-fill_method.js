//fill method
//fill(value, start, end)
//example 1: here we want to fill an array with value 1 and length 10.
const a = new Array(10).fill(1);
console.log(a);

// example 2: now we want to change specific range of value in an array.
const myArray = [1,2,3,4,5,6,7,8];
//now i want to change 2,3,4 to 0,0,0
const ans = myArray.fill(0,1,4);
console.log(ans);







