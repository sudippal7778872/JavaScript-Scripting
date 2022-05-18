//getter and setter

console.log("------------getter--------------")
class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
    get fullName(){  //to access this method like property. means without braces.
        return `full name ${this.firstName} ${this.lastName}`;
    }
}

const person1 = new Person("suman","mukherjee",8);
console.log(person1.fullName); //full name suman mukherjee
/*
in case of any property we can access it like person1.property. but in case of
function we have to call it. like person1.fullName(); with out brace we can get 
output. to get the output without brace we can use "get" keyword. 
*/



// -------------------------------------------------------------------------------------
console.log("--------------------------setter-------------------------");
// now we want to change the full name
//method 1: through method
class Human{
    constructor(firstName,lastName,age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
    get fullName(){  //to access this method like property. means without braces.
        return `full name ${this.firstName} ${this.lastName}`;
    }
    setName(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        return `full name ${this.firstName} ${this.lastName}`;

    }
}
const human1 = new Human("prallad","pal",7);
console.log(human1.setName("rakesh","mallick"));


//method 2: set
class H{
    constructor(firstName,lastName,age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
    set fullName(fName){
        let [firstName,lastName] = fName.split(" ");
        this.firstName = firstName
        this.lastName = lastName
        return `full name ${this.firstName} ${this.lastName}`;
    }
}

const h1 = new H("rakesh","mallick",8);
console.log(h1); // H {firstName: 'rakesh', lastName: 'mallick', age: 8}
h1.fullName = "prallad pal";
console.log(h1); //{firstName: 'prallad', lastName: 'pal', age: 8}













