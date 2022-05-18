 //find
 //it will the first occurance with length === 5
 const myArray = ["cat","dog","tiger","cow","bull"];

 const ans = myArray.find((string)=>{
     return string.length === 5;
 })

 console.log(ans);

 ////same thing outside function
 function isLength(string){
     return string.length === 4;
}
const answer = myArray.find(isLength) //callback function

console.log(answer);


