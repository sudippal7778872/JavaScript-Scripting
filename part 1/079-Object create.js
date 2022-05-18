//Object.create()

const obj1 ={
    key1:"value1",
    key2:"value2",
}

const obj2 ={
    key3:"value3"
}
console.log(obj2.key2); //undefined . because there is no key2 in obj2.

/*now we want to create object in such a manner so that if we unable to find an
key into an object then it will go for checking another object and if it is there 
it will access the value.
*/

const obj3 ={
    key1:"value1",
    key2:"value2",
    key69:"value69",
}
//will create the object by using Object.create()
const obj4 = Object.create(obj3); //empty object {}
// console.log(obj4);
//but connection will establish here with obj3. now if we unable to get any key in
// obj4 it will go to obj3.
obj4.key3 = "value3"
console.log(obj4);
//now we will try to get key2 from obj4 which is not there.
console.log(obj4.key69); //value 69. which is access from obj3.

/*
how it is work?
it first search in own object. if unable to find then goes to prototype object.
here which is obj3.
if you print obj4 you will get it's prototype object.
*/
// __proto__ is same as [[prototype]]
//prototype is different
console.log(obj4.__proto__); //obj3




