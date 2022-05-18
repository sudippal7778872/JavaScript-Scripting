//short syntax of method
const user={
    firstName: "Prallad",
    age: 8,
    about: function(){
        
        console.log(this.firstName, this.age);
    }
}
//calling
user.about();

//short syntax
const user2={
    firstName: "Prallad",
    age: 8,
    about(){ //short
        console.log(this.firstName, this.age);
    }
}
//calling
user2.about();
















