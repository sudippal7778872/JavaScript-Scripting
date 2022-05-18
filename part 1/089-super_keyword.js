//super keyword
//same method have both sub and super class.

/*
if we call the sub class's constructor and try to get an property, in that case sub 
class constructor check that property is present in that sub class or not. if there 
then return it. if not present then check in super class. and do the same if present
return else error or go to his super class. 
*/

//now here we want to add few more property in dog class.
class Animal{  //parent or super class
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`;
    }
    isSuperCute(){
        return this.age <=2; 
    }
    isCute(){
        return true;
    }
}
class Dog extends Animal{    //dog is child or sub class
    constructor(name,age,speed){
        super(name,age); //super keyword represent the super or parent class. 
        // here we use the super class's name and age
        this.speed = speed; //this keyword refers current object where it is written.
    }
    eat(){
        return `Modified eat: ${this.name} is eating`
    }
    run(){
        return `${this.name} can run at speed ${this.speed}kmph`
    }
}

const dogydon = new Dog("tommy",5,30);
console.log(dogydon.eat());
console.log(dogydon.run());