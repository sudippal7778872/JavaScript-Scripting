//Map

const person = new Map([["firstName","prallad"],["age",7]]);
console.log(person);

//now we want to store more info about an object some other place.
console.log("-------------------------------");
let p = {
    id: 1,
    firstName: "prallad",
}

const uesrInfo = new Map();//empty Map
//now we set the p object as a key in map.
uesrInfo.set(p, {age:7, gender:"male"});
console.log(uesrInfo);

//now we want to access the value.
console.log(p.id);//access the object elemnt
console.log(uesrInfo.get(p).gender); //access the Map element



