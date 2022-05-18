// use promise in xhr for multiple request to prevent from callback hell.

const URL = "https://jsonplaceholder.typicode.com/posts";
function sendRequest(method, url){
    return new Promise(function(resolve, reject){
        const xhr = new XMLHttpRequest();
        xhr.open(method, url)
        xhr.onload = function(){
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            }else{
                reject(new Error("Something went Wrong"));
            }
        }
        xhr.send();
    })
}

// now we will call our function
// const a = sendRequest("GET",URL)  //this will return a promise
// console.log(a); //promise

sendRequest("GET",URL)
.then((resolve)=>{
    const data = JSON.parse(resolve);
    // console.log(data);
    return data; // now the promise resolve with data. else it will be undefined.
})
.then((data)=>{
    // console.log(data[3]); //we want to see "third element/id 4" of the array.
    const id = data[3].id;
    return id;
})
.then((id)=>{   //now we want to create one more request
    const url = `${URL}/${id}`;
    // console.log(url);
    return sendRequest("GET", url);
})
.then((newResponse)=>{
    const newData = JSON.parse(newResponse)
    console.log(newData);
})
.catch((error)=>{
    console.log(error);
})














