//prototype

//in javaScript function is also behave as a object.
function hello(){
    console.log("hello world");
}
//we can add our own property into an function, same as adding key value in object
// hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty);

//function give us empty object which called prototype
console.log(hello.prototype); //{constructor: ƒ}

//only function provide prototype property.
console.log("------------------------------------");
hello1 = {
    key1:"value1"
}
console.log(hello.prototype);//{constructor: ƒ}
console.assert(hello1.prototype);//error. same for array and others.

//in that empty object or prototype we can add out own property. and we can use it.
console.log("---------------adding property in prototype -------------------");
console.log(hello.prototype); //{constructor: ƒ}
//adding property
hello.prototype.name= "prallad";
hello.prototype.age= 8;
hello.prototype.food= ["chicken","biriyani","fried rice"];
hello.prototype.about= {
    hobby:"Front end developer",
    sport: "cricket",
};
hello.prototype.details= function(){
    return `user ${this.name} is ${this.age} years and love to play ${this?.about?.sport}`;
};

//now let see the object or prototype
console.log(hello.prototype);
console.log(hello.prototype.details());











