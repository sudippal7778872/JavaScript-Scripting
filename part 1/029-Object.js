//object is a referance type.

const person = {
    name: "prallad", 
    age: 23,
    hobbies: ["cricket","football","movie"]
};
//key is also string. we can also write like "name": "prallad".
console.log(person);
//now if we wanted to access hobbies
console.log(person.hobbies);
//or
console.log(person["hobbies"]); //same result


//how to add key value pair in object.
person.gender = "male";
//or
person["nationality"] ="indian";//work
console.log(person);

//we can use both "." as well as "[]"







