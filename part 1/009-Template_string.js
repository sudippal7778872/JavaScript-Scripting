//Template String

let n = "prallad pal";
let age = 23;
let aboutMe = "my name is " + n + " and my age is " + age;
console.log(aboutMe); //valid

//same thing will do through Template string
let about = `my name is ${n} and my age is ${age}`;
console.log(about);