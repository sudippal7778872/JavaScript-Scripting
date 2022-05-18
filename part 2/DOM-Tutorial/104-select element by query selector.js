//select element by query selector
//we can select anything through css selector way.

// we can select anything through query selector.
// to select id through query selector we can use #.
// to select id through query selector we can use ..
// to select tag through query selector we can use tag name
//

const mainHeading = document.getElementById("main-heading");

const mh = document.querySelector("#main-heading");//select main-heading id
const h = document.querySelector(".header");//select header class
const d = document.querySelector("div");//select tag

// now we want a h2 in div tag which's class name is headline.
const dh = document.querySelector("div.headline h2");//select tag

console.log(mh);
console.log(h)
console.log(d);
console.log(dh);


//in case of class. multiple item can have same class. so in that case query selector 
//select the only the first one.
console.log("---------------example---------------");
const navItem = document.querySelector(".nav-item");
console.log(navItem);//only the first item.

console.log("------------------------------");
//if you want to select all the class with same name then--
const navItems = document.querySelectorAll(".nav-item");
console.log(navItems);














