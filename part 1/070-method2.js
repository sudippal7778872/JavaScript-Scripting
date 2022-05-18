//method
//function is outside

// example 4
function personInfo(){
    console.log(`person first name is ${this.firstName} and age is ${this.age}`);
}

const person4={
    firstName: "prallad",
    age:4,
    about: personInfo
}
const person5={
    firstName: "suman",
    age:14,
    about: personInfo
}
const person6={
    firstName: "Rakesh",
    age:41,
    about: personInfo
}
person4.about();
person5.about();
person6.about();