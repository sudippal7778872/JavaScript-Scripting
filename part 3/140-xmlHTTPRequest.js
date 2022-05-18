// xmlHTTPRequest
// now we want to use Rest API


/*
    request          work

    GET             to get data
    POST            Create data
    PUT             update data
    PATCH           small update data
    DELETE          Remove or delete data
*/
// we will make a GET request

// const URL = "https://jsonplaceholder.typicode.com/posts"
// const xhr = new XMLHttpRequest();  //will get an object
// // console.log(xhr);  //object
// /*
// in xhr object we have open() method. which takes two parameter. first parameter which
// request(GET, POST, PUT, DELETE etc) and second parameter is from where we want to
// request(URL).
// .open("GET",URL);
// */
// // console.log(xhr.readyState);
// xhr.open("GET",URL);
// // console.log(xhr.readyState);
// /*
// now we have one more function onreadystatechange(); it will call when state is 
// changed.this is called by browser. to know more about readyState 
// "https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState"
// when readyState is 4 we get response from server. we can use it.
// */
// xhr.onreadystatechange = function(){  //we can see ready state is changed 3 times
//     // console.log(xhr);
//     // console.log(xhr.readyState);
//     if(xhr.readyState === 4){
//         // console.log(xhr); //if we expend the response property have some value.
//         console.log(xhr.response); // got output
//         console.log(typeof xhr.response); // string
//         //now need to convert string to JSON
//         const response = xhr.response;
//         const data = JSON.parse(response);
//         console.log(data);
//         console.log(typeof data); //object
//     }
// }

// xhr.send(); //will send the request



// --------------------------------------------------------------------------
//refresh above code
// const URL = "https://jsonplaceholder.typicode.com/posts"
// const xhr = new XMLHttpRequest();
// xhr.open("GET",URL);
// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4){
//         console.log(xhr.response);
//         console.log(typeof xhr.response);
//         const response = xhr.response;
//         const data = JSON.parse(response);
//         console.log(data);
//         console.log(typeof data);
//     }
// }
// xhr.send();
// -------------------------------------------------------------------------
// onload property --- this property will only executing when readyState is 4.
// so same this we can achive  below:-
const URL = "https://jsonplaceholder.typicode.com/posts"
const xhr = new XMLHttpRequest();
xhr.open("GET", URL);
xhr.onload = function () {
    console.log(xhr.readyState);
    console.log(xhr.response);
    console.log(typeof xhr.response);
    const response = xhr.response;
    const data = JSON.parse(response);
    console.log(data);
    console.log(typeof data);
}
xhr.send();












