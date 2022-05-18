//every
//this method return true and false. if all conditions are ture return true 
// else return false.
//like "AND" gate

const numbers = [2,4,6,8,10];//if i add any element as odd, every method will return us false.
//outside function
function isEven(number){
    return number%2===0;
}
const ans = numbers.every(isEven);
console.log(ans);

//inside function
console.log("-----------inside function---------");
const answer = numbers.every((number)=> number%2===0);
console.log(answer);