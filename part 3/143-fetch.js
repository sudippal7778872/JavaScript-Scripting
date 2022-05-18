// fetch

/*
fetch By default do GET request.

it automatically do all the promisify.

it return promise. so we can use .then() and catch() method.

*/ 

const URL = "https://jsonplaceholder.typicode.com/posts";
// const whatItReturn = fetch(URL);
// console.log(whatItReturn); //Promise {<pending>}
fetch(URL)
.then((response)=>{
    // console.log(response.json()); //promise. //console.log(response) expend the output
    // so need to use return keyword to see resolve or reject with which data.
    return response.json()
})
.then((data)=>{
    console.log(data); //we got our data
})
.catch((error)=>{
    console.log(error);
})
/*
if we got 404 error or other error catch won't execute. then will execute.
catch will execute only when network related error will occured  
*/

// ------------------------------------------------------------------------

// error handled
//through ok property will handle error.
const URL2 = "https://jsonplaceholder.typicode.com/postss";
fetch(URL2)
.then((response)=>{
    if(response.ok){
        return response.json()
    }else{
        throw new Error("Something went wrong");
    }
})
.then((data)=>{
    console.log(data); //we got our data
})
.catch((error)=>{
    console.log(error);
})


















