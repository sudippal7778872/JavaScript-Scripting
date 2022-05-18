//Sets (it is iterable)
//store data
//set also have its own method
//no index based access
//order is not guaranteed
//unique items only (no duplicate allowed)

const number = new Set([1,2,3,3]);
console.log(number); //no duplicate value
console.log(number[2]); //output:undefined, no index based access.

//another way to add element in set
console.log("-----------------------------");
const items = ["item1", "item2","item3","item4"];
const n = new Set();
n.add(1);
n.add(2);
n.add("item");
n.add(["item1","item2"]);
n.add(["item1","item2"]); //this is not duplicate. both have different memory address.
n.add(items);
n.add(items);//this is duplicate both has same memory address
console.log(n);

//if we want to find any element present in the set or not.
//use has() method.
//it return true or false.
const ans = number.has(1)
console.log("value of ans is: ",ans);
if(number.has(1)){
    console.log("1 is present");
}else{
    console.log("1 is no present")
}

//let see set is iterable or not
console.log("---------------iterable-----------")
for(let i of number){
    console.log(i);
}


//we need to use set when we have unique value like userId and all.
//now have a array and we want all unique element from it.
console.log("------------------------");
const myArray=[1,2,4,4,5,6,5,6];
const uniqueElements = new Set(myArray);
console.log(uniqueElements);

//now we want to find length uniqueElement.
console.log(uniqueElements.length); //output: undefined
//we use for of loop to find length as it is iterable.
let length=0;
for(let i of uniqueElements){
    length++;
}
console.log("length of uniqueElement is: ",length);





