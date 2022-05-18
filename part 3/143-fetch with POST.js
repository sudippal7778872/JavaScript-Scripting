// POST using fetch


const URL = "https://jsonplaceholder.typicode.com/posts";
fetch(URL, {
  method: 'POST',
  body: JSON.stringify({  // convert string to json
    title: 'foo',   // write data
    body: 'bar',    // write data
    userId: 1,      // write data
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
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


// use other method PUT PATCH DELETE