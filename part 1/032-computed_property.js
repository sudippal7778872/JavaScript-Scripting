const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1"
const value2 = "myvalue2"
//method 1
const obj ={};

obj[key1]=value1;
obj[key2]=value2;
console.log(obj);

//if we do it like
//here key1 and key2 wont evaluate while value1 and value2 evaluate.
const obj2 ={
    key1: value1,
    key2: value2
};
console.log(obj2);

//method 2
//computed property
console.log("----------------computed property----------")
const obj3 ={
    [key1]: value1,
    [key2]: value2
};
console.log(obj3);
