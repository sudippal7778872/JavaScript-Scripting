//apply
//call and apply method both are almost same
//only on call time we have to pass all the arguments in array.
function about(hobbie,favFood){
    console.log(this.firstName, this.age, hobbie,favFood);
}
console.log("---------------------------------")
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
// apply
about.apply(user1, ["cricket", "Chicken"]);
about.apply(user2, ["football", "white & blue"]);
about.apply(user3, ["politics", "biriyani"]);