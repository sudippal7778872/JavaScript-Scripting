//create function to create multiple object
// const user={
//     firstName: "Prallad",
//     lastName: "pal",
//     email: "sudippal1106@gmail.com",
//     age: 8,
//     about: function(){
//         console.log(this.firstName, this.age);
//     },
//     is18: function(){
//         return this.age >=18;
//     },
// }
//now we want to create crores of user with with different value
//how to do that?
// step 1- create function(thats function create object)
// add key value pair
// object ko karega
function createUser(firstName,lastName,email,age){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.about = function(){
        return `user ${this.firstName} is ${this.age} years.`;
    };
    user.is18 = function(){
        return this.age >= 18;
    };
    return user;
}
//create  n no of user
const user1 = createUser('prallad','pal','sudippal1106@gmail.com',8);
console.log(user1);
const is18 = user1.is18();
console.log(is18);
const about = user1.about();
console.log(about);












