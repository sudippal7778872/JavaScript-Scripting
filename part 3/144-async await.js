// async await

// const URL = "https://jsonplaceholder.typicode.com/posts";
// fetch(URL)
// .then((response) => response.json())  // arrow function in  short
// .then((data) =>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })

// now we will do the same thing through  async await
/*
if we write async before a function it will become a async function. and always
return a promise.
*/

const URL = "https://jsonplaceholder.typicode.com/posts";
// async function getPost(){
//     const response = await fetch(URL);  //await will wait till resolve with value
//     if(!response.ok){
//         throw new Error("Something went wrong");
//     }
//     const data = await response.json();  //await will wait to resolve with value.
//     // console.log(data);
//     return data;
// }
// // const whatItReturn = getPost();
// // console.log(whatItReturn); //Promise {<fulfilled>: undefined}

// //await will wait to resolve with value.json() method return promise.
// getPost()
// .then((mydata)=>{
//     console.log(mydata);
// }).catch((error)=>{
//     console.log(error);
// })


// for arrow function

const getPost = async()=>{
    const response = await fetch(URL);
    if(!response.ok){
        throw new Error("Something went wrong");
    }
    const data = await response.json();
    return data;
}
getPost()
.then((mydata)=>{
    console.log(mydata);
}).catch((error)=>{
    console.log(error);
})












