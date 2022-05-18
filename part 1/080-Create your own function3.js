// //we are storing all the method in another object and sharing his referance.
// const userMethods = {
//     about : function () {
//         return `user ${this.firstName} is ${this.age} years.`;
//     },
//     is18 : function () {
//         return this.age >= 18;
//     },
// }

// function createUser(firstName, lastName, email, age) {
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.about = userMethods.about; //shared the referance
//     user.is18 = userMethods.is18; //shared the referance
//     return user;
// }
// /*
// userMethod object will store in memory once. and the corers of user at runtime 
// go to that referance. 
// */
// const user1 = createUser('prallad','pal','sudippal1106@gmail.com',8);
// const user2 = createUser('suman','mukherjee','sudippal1106@gmail.com',8);
// const user3 = createUser('rakesh','mallick','sudippal1106@gmail.com',8);
// console.log(user2);
// const is18 = user1.is18();
// console.log(is18);
// const about = user1.about();
// console.log(about);

/*
here we also have one problem. if we try to use one key which is not present in
that object. then it have to go it's prototype.
079-Object.create.js concept.
*/

const userMethods = {
    about : function () {
        return `user ${this.firstName} is ${this.age} years.`;
    },
    is18 : function () {
        return this.age >= 18;
    },
}

function createUser(firstName, lastName, email, age) {
    const user = Object.create(userMethods);//in this way we have to create object.
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    return user;
}

//in user object we do not have about and is18 method or key but we can access it
// from it prototype.
const user2 = createUser('suman','mukherjee','sudippal1106@gmail.com',8);
console.log(user2); //you can see what are the key exist in prototype.
console.log(user2.about());


