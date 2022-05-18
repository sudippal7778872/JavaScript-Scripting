//iterate object
// two methods
// 1. for in
// 2. object.keys()

const person = {
    name: "prallad",
    age: 23,
    "person hobbies": ["cricket", "football", "movie"]
};

//here we are getting the index
//method 1
for (let key in person) {
    console.log(key);
}

//now we want values
for (let key in person) {
    console.log(person[key]);
}


//method 2
console.log("-------------- method 2 ------------------");
//give us index
console.log(Object.keys(person));
console.log("----------------------");
//get values
for(let k of Object.keys(person)){
    console.log(person[k]);
}