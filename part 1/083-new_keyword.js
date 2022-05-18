//new keyword
/*new keyword does three things
1. create an empty object and this will be refer that object.
2. return the empty object.
3. it automatically set the __proto__ with empty object or prototype property.
which we are doing manually  by "const user = Object.create(createUser.prototype);".
The chain is automatically establish.
*/
function createUser(firstName,age){
    this.firstName=firstName;
    this.age = age;
}
createUser.prototype.about = function(){
    console.log(`user ${this.firstName} is ${this.age} years`);
}

const user1 = new createUser("prallad", 10);
console.log(user1); //[[prototype]] is automatically set to Object.
console.log(user1.about());

