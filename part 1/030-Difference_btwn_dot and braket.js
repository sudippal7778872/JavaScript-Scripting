////////////////////////////////////////////////////
// difference between dot(.) and braket([])

const person = {
    name: "prallad", 
    age: 23,
    "person hobbies": ["cricket","football","movie"]
};
//now we want to access person hobbies
console.log(person.hobbies) //we can access "person hobbies" through "." 
// we have to use braket "[]"

console.log(person["person hobbies"]);


//now we want to add email key through const var k.
const k = "email"
//person.key="sudippal1106@gmail.com";//invalid
console.log(person);
//it will add like email: "sudippal1106@gmail.com"
//we have to use value of key means email:"sudippal1106@gmail.com"

person[k]="sudippal1106@gmail.com"; //k will be without double quote it will behave as an variable.
console.log(person);



