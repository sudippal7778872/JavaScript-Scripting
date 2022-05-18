//get multiple items using getelements by class name
//get multiple items using querySelectorAll

const navItems = document.getElementsByClassName("nav-item"); //gives HTMLCollection
//output is array like object. we can use the ixdexing to get specific item.

console.log(navItems);
console.log(navItems[0]);//home
console.log(navItems[1]); //todo

console.log("-----------------------------------------");
//querySelectorAll
const nvItems = document.querySelectorAll(".nav-item"); //gives NodeList
//this is also array like object
console.log(nvItems);

















