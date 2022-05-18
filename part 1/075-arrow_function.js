//arrow function
//arrow function do not have this object.
//arrow function use this from his surrounding.

const user={
    firstName: "Prallad",
    age: 8,
    about: function(){
        console.log(this);
        console.log(this.firstName, this.age);
    }
}
user.about(); //valid

//but if we write arrow function it give undefined.
const user2={
    firstName: "Prallad",
    age: 8,
    about: ()=>{
        console.log(this);
        console.log(this.firstName, this.age);
    }
}
user2.about();/*user does not have this. it takes "this" one level up.in this case 
it is window.and window does not have fisrtName and age thats why gives undefined.*/



















