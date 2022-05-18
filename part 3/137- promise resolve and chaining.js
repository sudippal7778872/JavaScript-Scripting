// Promise.resolve
// promise chaining

// const myPromise = Promise.resolve(5);
// myPromise.then((value)=>{
//     console.log(value);
// })

//or
// Promise.resolve(5).then((value)=>{
//     console.log(value);
// })

// Then method always return promise.

// promise chaining
function myPromise(){
    return new Promise((resolve,reject)=>{
        resolve(foo);
    })
}
myPromise().then((value)=>{
    console.log(value);
    value += "bar";
    return value;  //this line return promise. inner meaning of this line is 
    //return Promise.resolve(value); so that we can again call then method
}).then((value)=>{
    console.log(value);
})











