//iterable
//where we can use for of loop, we can say that is iterable.

const firstName = "prallad";
for(let char of  firstName){
    console.log(char);
}
//so string is iterable

const items = ["item1", "item2","item3","item4"];
for (let item of items){
    console.log(item);
}
//so array is iterable

const obj = {key1:"value1",key2:"value2"};
for(let i of obj){
    console.log(i); //o/p- obj is not iterable
}
//so obj is not iterable.