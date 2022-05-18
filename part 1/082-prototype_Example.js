//prototype example

//seperate object
// const userMethods = {
//     about : function () {
//         return `user ${this.firstName} is ${this.age} years.`;
//     },
//     is18 : function () {
//         return this.age >= 18;
//     },
// }

/*here we create a separated userMethod Object. but whenever we create a function
that time we get a empty object or prototype so we do not need to create seperate 
object. we can add all those property there.
*/
//we are adding the same property in empty object or prototype.
createUser.prototype.about = function () {
            return `user ${this.firstName} is ${this.age} years.`;
        };
createUser.prototype.is18 = function () {
            return this.age >= 18;
        };

function createUser(firstName, lastName, email, age) {
    const user = Object.create(createUser.prototype); //here now the object is prototype
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    return user;
}

const user2 = createUser('suman','mukherjee','sudippal1106@gmail.com',8);
console.log(user2);
console.log(user2.about());













