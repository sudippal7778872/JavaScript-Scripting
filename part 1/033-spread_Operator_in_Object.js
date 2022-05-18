//Spread Operator

const obj1 ={
    key1: "value1",
    key2: "value2"
};
const obj2 ={
    key1: "newvalue",
    key3: "value3",
    key4: "value4"
};

const newObj = {...obj1, ...obj2};
console.log(newObj);

// key value will be unique. so the last value will be overwritten.
//add one more key
const addObj = {...obj1, ...obj2, key69:"value69"};
console.log(addObj);



///also we can spread a string.
console.log("----------------spread string-----------");
const n = {..."abc"}; //o/p {0: 'a', 1: 'b', 2: 'c'}
console.log(n);



