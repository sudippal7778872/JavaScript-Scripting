//param destructuring

const person ={
    fname: "prallad",
    gender: "male",
}
function print(obj){
    console.log(obj.fname);
    console.log(obj.gender);
}
print(person);

//param destructuring
console.log("----------param destructuring----------")
function printf(fname,gender,age){
    console.log(fname);
    console.log(gender);
    console.log(age); //will be undefined as not mention in object.
}
printf(person);