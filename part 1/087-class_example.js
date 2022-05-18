//class example

class Animal{
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

const animal1 = new Animal("Tom",8);
console.log(animal1.eat());
console.log(animal1.isSuperCute());//false
console.log(animal1.isCute()); //true



