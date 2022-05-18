//class inharitance

//suppose we have Animal class now we want to create dog,cat,mouse etc class.
//for that we an inharit the Animal class property. and reduce our code.And increase 
// the reusability of code.
// we can add only the new property there.
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

}
const dobarman = new Dog("tommy",5);
console.log(dobarman.eat());



