//callback
// when we pass a function as an argument called callback function. it can be arrow 
// function as well.

// function myFun1(callback){  //here
//     console.log("myFun1");
//     callback();
// }
// function myFun2(){
//     console.log("myFun2");
// }
// myFun1(myFun2);

//arrow function
// function myFun1(callback){  //here
//     console.log("myFun1");
//     callback();
// }
// function myFun2(){
//     console.log("myFun2");
// }
// myFun1(()=> { 
//     console.log("myFun2");
// });

// example 1:-
// function getTwonumbersAndAdd(number1, number2, callback) {
//     console.log(number1, number2);
//     if (typeof number1 === "number" && typeof number2 === "number") {
//         callback(number1, number2);
//     }else{
//         console.log("wrong data type");
//     }
// }
// function addTwoNumber(num1, num2) {
//     console.log(num1 + num2);
// }

// // getTwonumbersAndAdd(4, 5, addTwoNumber);
// getTwonumbersAndAdd("4", "5", addTwoNumber);

// example 2:- now we wnat to pass two callback functions using arrow function.
function getTwonumbersAndAdd(number1, number2, onSuccess,onFailure) {
    console.log(number1, number2);
    if (typeof number1 === "number" && typeof number2 === "number") {
        onSuccess(number1, number2);
    }else{
        onFailure();
    }
}


getTwonumbersAndAdd(4, 5, (num1, num2) => {
    console.log(num1 + num2);
},
()=>{
    console.log("wrong data type");
    console.log("please enter correct data type");
});
// we can also use the normal function as well in previous way.
// first callback will be for onSuccess() and next one will be for onFailure();






