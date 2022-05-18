// //get multiple items using getelements by class name
// //get multiple items using querySelectorAll

// const navItems = document.getElementsByClassName("nav-item"); //gives HTMLCollection
// //output is array like object. we can use the ixdexing to get specific item.

// console.log(navItems);
// console.log(navItems[0]);//home
// console.log(navItems[1]); //todo

// console.log("-----------------------------------------");
// //querySelectorAll
// const nvItems = document.querySelectorAll(".nav-item"); //gives NodeList
// //this is also array like object
// console.log(nvItems);

//----------------------------------------------------------------------------------
//now we want to color the nav items

const navItems = document.getElementsByTagName("a");
const nvItems = document.querySelectorAll(".nav-item");
//loop 1. simple for loop     2. for of loop    3.forEach loop
//we cant use forEach loop in HTMLCollection
for(let i=0; i<navItems.length; i++){
    let navItem = navItems[i];
    navItem.style.color = "white";
    navItem.style.backgroundColor = "green";
}

//we can convert HTML collection and and NodeList to an array.
console.log("------------------------------");
let navArray1 = Array.from(navItems);  
console.log(Array.isArray(navArray1));

let navArray2 = Array.from(nvItems); 
console.log(Array.isArray(navArray2));

//after converting to an array we can apply all the array method on it.















