//static methods and property
//we can directly call the static method with out creating an object.

class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
    fullName(){  //to access this method like property. means without braces.
        return `full name ${this.firstName} ${this.lastName}`;
    }
    eat(){
        return `${this.firstName} is eating`;
    }
    isSuperCute(){
        return this.age <=2; 
    }
    isCute(){
        return true;
    }
    static classInfo(){
        return `this is a static method`;
    }
    static print = "hello world";
}
/*now if want to call any method apart from static we have to create object.
const person1 = new Person("suman","mukherjee",8);
console.log(person1.eat());
we cant access static method through person1.
console.log(person1.print); //undefined
*/
//we can call static method without create an object.
//objectName.staticMethodname
console.log(Person.classInfo()); //this is a static method
console.log(Person.print);



















