const URL = "https://jsonplaceholder.typicode.com/posts"
const xhr = new XMLHttpRequest();
xhr.open("GET", URL);
//arrow function
xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
        const data = JSON.parse(xhr.response);
        console.log(data);
    }else{
        console.log("something went wrong");
    }
}
xhr.onerror = ()=>{
    console.log("network error/failure")
}
xhr.send();

/*
when network error/failure occured onerror property excute by browser. 
Ex: internet disconnected etc.
*/
/*
if we want to open posts and id 4 or some more url.then it will become a callback hell
for that can use promise.
*/ 

