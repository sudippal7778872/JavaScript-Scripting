//method
// if any function written inside object called method.

//example 1 hardcode
const person = {
    firstName: "Prallad",
    age: 8,
    about: function(){
        console.log("first name is Prallad and age is 8");
    },
}
//access
person.about();

//example 2 variable
console.log("---------------example 2 --------");
const person2 = {
    about: function(firstName,age){
        console.log(`first name is ${firstName} and age is ${age}`);
    },
}
//access
person2.firstName ="mohit";
person2.age = 8;
person2.about(person2.firstName,person2.age);

//example 3 -this keyword--inside function
//If we want access the key from same object. then we use this keyword.
console.log("---------------example 3 this --------");
const person3 = {
    firstName: "suman",
    age: 7,
    about: function(){
        console.log(`First name is ${this.firstName} and age is ${this.age}`);
    },
}
//access
//this=person3 object
person3.about();
























