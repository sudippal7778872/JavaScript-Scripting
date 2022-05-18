//bind method
//bind method bind the argument and return a function.
function about(hobbie,favFood){
    console.log(this.firstName, this.age, hobbie,favFood);
}
console.log("---------------------------------");
const user1={
    firstName: "Prallad",
    age: 8,
};
const user2={
    firstName: "suman",
    age: 18,
};
const user3={
    firstName: "Rakesh",
    age: 10,
}
// call
//now we want to use the user1's about in user2. how can we used that--
//we have to use the call method.
// about.call(user2,"football", "white & blue");
// //if the function have argument we can pass that as well through call method.
// about.call(user1,"cricket", "Chicken");
// 
// apply
// about.apply(user1, ["cricket", "Chicken"]);
// about.apply(user2, ["football", "white & blue"]);
// about.apply(user3, ["politics", "biriyani"]);

// bind
const fun = about.bind(user1,"cricket", "Chicken"); //its bind arguments and return a function.
//now we can call fun
 fun();


//never do this mistake//
console.log("--------never do this mistake------------");
const user={
    firstName: "Prallad",
    age: 8,
    about: function(){
        console.log(this.firstName, this.age);
    }
}

//calling
const myFun = user.about;//invalid
myFun();

const myFun2 = user.about.bind(user);//valid. now it is bind with user not window object.
myFun2();
//because we are not calling our function. here this === windows
// and this.firstName = window.firstName which is undefined
//this will represent our function calling time.


















