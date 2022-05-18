//static list and live list

//query selector give us static list
//getElementBySomething will give us live list
/*
live list mean if we add or remove element through javascript this will reflect in 
live list. static list will remain the previous.
*/

//static list
// const listItems = document.querySelectorAll(".todo-list li"); //static list 
// console.log(listItems); ////NodeList(5) [li, li, li, li, li]
// const ul = document.querySelector(".todo-list");
// const sixthLi = document.createElement("li");
// sixthLi.textContent = "item 6";
// ul.append(sixthLi);

//live list
const ul = document.querySelector(".todo-list");
const listItems = ul.getElementsByTagName("li");
console.log(listItems); //HTMLCollection(6)
const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";
ul.append(sixthLi);









