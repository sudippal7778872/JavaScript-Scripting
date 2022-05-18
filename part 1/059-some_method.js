//some method
//like OR gate
//if its find any of the case true return true. else return false.
//oposite of every.

const numbers=[1,3,5,7];
const numbers2 = [1,3,5,7,8];
const ans = numbers.some((number)=>number%2===0); //no condition is true.
console.log(ans);

const ans2 = numbers2.some((number)=>number%2===0);
console.log(ans2); //one condition is true. so it return true.





