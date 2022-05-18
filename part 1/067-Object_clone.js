//object clone using Object.assign
//memory
//referance type
const obj1 ={
    key1:"value1",
    key2:"value2",
}

const obj2 = obj1; //in memory there will be only one object
//obj1 and obj2 both have same address of object.

obj1.key3="value3" 
//change will reflet on obj3 as well.because both have same memory address.
console.log(obj1);
console.log(obj2);
//now we want to clone a new object which have different memory address

console.log("-------------clone------------");
//method 1
const obj3 = {...obj1};

// method 2
const obj4 = Object.assign({},obj1); //Object.assign(empty array,clone array);
//now if we change in obj1 that wont reflect on obj3 nad obj4
obj1.key4 ="value4";
console.log("obj1 : ",obj1);
console.log("obj3 : ",obj3);
console.log("obj4 : ",obj4);





