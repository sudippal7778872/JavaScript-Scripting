//call method

function hello(){
    console.log("hello world");
}
// we can call this method two way
hello();
hello.call(); //we can use call method to call a function

// example 2
console.log("---------------------------------")
const user1={
    firstName: "Prallad",
    age: 8,
    about: function(){
        console.log(this.firstName, this.age);
    }
};
const user2={
    firstName: "suman",
    age: 18,
    about: function(hobbie,favFood){
        console.log(this.firstName, this.age, hobbie,favFood);
    }
};
const user3={
    firstName: "Rakesh",
    age: 10,
}
//now we want to use the user1's about in user3. how can we used that--
//we have to use the call method.
user1.about.call(user3);
//if the function have argument we can pass that as well through call method.
user2.about.call(user3,"cricket", "Chicken");





//same thing we can get by writing the function seperate
// example 3

function about(hobbie,favFood){
    console.log(this.firstName, this.age, hobbie,favFood);
}
console.log("---------------------------------")
const user4={
    firstName: "Prallad",
    age: 8,
};
const user5={
    firstName: "suman",
    age: 18,
};
const user6={
    firstName: "Rakesh",
    age: 10,
}
//now we want to use the user1's about in user2. how can we used that--
//we have to use the call method.
about.call(user3,"football", "white & blue");
//if the function have argument we can pass that as well through call method.
about.call(user3,"cricket", "Chicken");








