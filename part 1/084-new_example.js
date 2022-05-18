//new keyword example
//here we see the previous creating user example.
/*new keyword does three things
1. create an empty object and this will be refer that object.
2. return the empty object.
3. it automatically set the __proto__ with empty object or prototype property.
which we are doing manually  by "const user = Object.create(createUser.prototype);".
The chain is automatically establish.
*/

createUser.prototype.about = function () {
    return `user ${this.firstName} is ${this.age} years.`;
};
createUser.prototype.is18 = function () {
    return this.age >= 18;
};

function createUser(firstName, lastName, email, age) {
    // const user = Object.create(createUser.prototype); //we do not need this. new keyword 
    // automatically does this 
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    // return user; //automatically return so no need. 
}

const user2 = new createUser('suman', 'mukherjee', 'sudippal1106@gmail.com', 8);
//need to use new keyword
console.log(user2);
console.log(user2.about());

//[[prototype]] automatically set to object

/*

suppose in future if we create library by this kind of function. then how user 
should know they have to call this function by new keyword?

solution: - convention way in javascript this kind of function's case function name 
first letter will be capital letter.
example: CreateUser(){}

*/
// now we want to see all the key in our user2 by for in loop.
console.log("------------------------------------------------------------");
for (let i in user2) {
    console.log(i); //it show us all the all means prototype as well.
    //firstName,lastName,age,email,about,is18
}
//now we do not want to see prototype key. in that case: -
console.log("-----------show own property------------------");
for (let i in user2) {
    if (user2.hasOwnProperty(i)) {
        console.log(i); //firstName,lastName,age,email
    }
}


