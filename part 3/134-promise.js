//promise
//promise represents the future value.
//it is error handling
//to create promise we have to use new keywod
// promise takes a call back function.
//type of resolve and reject or argement can be anything. we can use as function or 
// array, or object anything.
const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];
const friedRicePromise = new Promise((resolve, reject) => {
    if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
        resolve("Fried Rice.")
    } else {
        reject("could not do it.")
    }
})

//how to use
/* in .then() method we can pass two call back function. first one when resolve and 
second one when reject.
here in example if the promise resolve then the first callback function's parameter
myFriedRice will get the value. if reject then second callback function's parameter
will get the reject value.
*/
// friedRicePromise.then(
//     //when promise relove
//     (myFriedRice) => {
//         console.log("lets eat ", myFriedRice);
//     }
//     ,
//     //when promise reject
//     (error) => {
//         console.log(error);
//     }
// )
// same thing in short
// friedRicePromise.then((myFriedRice) => {
//         console.log("lets eat ", myFriedRice);
//     },(error) => {
//         console.log(error);
//     }
// )

// same thing through then and catch
// catch
// catch will handle the reject
friedRicePromise.then((myFriedRice) => {
    console.log("lets eat ", myFriedRice);
}).catch((error)=>{
    console.log(error);
})


// promise is a feature of browser not javascript.

/*
callback function loaded in callback queue and promise loaded in microtask queue.
And the priority of microtask is more than callback.

for example: if we have one microtask in microtask queue and one callback function in 
callback queue then first microtask will execute and then callback function.
*/



