//Map
//data stored in order.
//key are alway string and in few case symbol in case of object.
//map store data in key value for like object.
//in case of Map it can be any datatype

const person = new Map();
person.set('name','prallad');
person.set('age','23');
person.set(1,"one"); //1 is number here.but if we do it in object it will consider as object.
person.set([1,2,3],"one"); //you can use any data type as a key. here it is array.
console.log(person)

//now we want to access the first element.
//we can use dot(.) or [""]
//Map has get() method to access the element.
console.log("---------------Access Element-------------");
console.log(person.get('name'));
console.log(person.get(1));
//get all the keys
console.log(person.keys()); //it gives all the keys.
console.log("------------iterate keys------------");
for(let key of person.keys()){
    console.log(key, typeof key);
}

//object is not iterable. so we cant use for off loop
//Map is iterable.
//it gives key value pair in array
console.log("---------Map iterable--------");
for(let key of person){
    console.log(key,Array.isArray(key));//it gives key value pair in array.
}

console.log("------------Destructure------------");
for(let [key,value] of person){
    console.log(key,value);//it gives key value pair in array.
}


