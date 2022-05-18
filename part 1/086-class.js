//class keyword

//this is the example creating multiple user through function
// createUser.prototype.about = function () {
//     return `user ${this.firstName} is ${this.age} years.`;
// };
// createUser.prototype.is18 = function () {
//     return this.age >= 18;
// };

// function createUser(firstName, lastName, email, age) {
//     // const user = Object.create(createUser.prototype); //we do not need this. new keyword 
//     // automatically does this 
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.email = email;
//     // return user; //automatically return so no need. 
// }

// const user2 = new createUser('suman', 'mukherjee', 'sudippal1106@gmail.com', 8);
// //need to use new keyword
// console.log(user2);
// console.log(user2.about());

//will do the same thing through class, that's why for reference i paste the previous
// code.

class CreateUser {
    constructor(firstName, lastName, email, age){
        console.log("constructor called");//to see the execution
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
    about(){
        return `user ${this.firstName} is ${this.age} years.`;
    }
    is18(){
        return this.age >= 18;
    }
}

// always we have to call our class by new keyword. without new gives an error.
const user1= new CreateUser('suman', 'mukherjee', 'sudippal1106@gmail.com', 8);//constructor will automatically call and return object.
console.log(user1.about());
//prototype
console.log(Object.getPrototypeOf(user1));





