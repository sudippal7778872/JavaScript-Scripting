//now we want to create crores of user with with different value
//how to do that?
// step 1- create function(thats function create object)
// add key value pair
// object ko karega
// function createUser(firstName,lastName,email,age){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.about = function(){
//         return `user ${this.firstName} is ${this.age} years.`;
//     };
//     user.is18 = function(){
//         return this.age >= 18;
//     };
//     return user;
// }
// //create  n no of user
// const user1 = createUser('prallad','pal','sudippal1106@gmail.com',8);
// console.log(user1);
// const is18 = user1.is18();
// console.log(is18);
// const about = user1.about();
// console.log(about);
// In this way we can create corers of user. but it have some memory issue.
//if it create corer of user each user have 2 method so all method take place
// memory, so it is a big deal. how to handle that?

//we are storing all the method in another object and sharing his referance.
const userMethods = {
    about : function () {
        return `user ${this.firstName} is ${this.age} years.`;
    },
    is18 : function () {
        return this.age >= 18;
    },
}

function createUser(firstName, lastName, email, age) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.about = userMethods.about; //shared the referance
    user.is18 = userMethods.is18; //shared the referance
    return user;
}
/*
userMethod object will store in memory once. and the corers of user at runtime 
go to that referance. 
*/
const user1 = createUser('prallad','pal','sudippal1106@gmail.com',8);
const user2 = createUser('suman','mukherjee','sudippal1106@gmail.com',8);
const user3 = createUser('rakesh','mallick','sudippal1106@gmail.com',8);
console.log(user2);
const is18 = user1.is18();
console.log(is18);
const about = user1.about();
console.log(about);