//add new HTML element to page

//innerHTML to add element
const todoList = document.querySelector(".todo-list");
// console.log(todoList);
console.log(todoList.innerHTML);
todoList.innerHTML = todoList.innerHTML + "<li>new todo</li>"

//now when you should use, and when should not
//we should not use this beacuse performance decrease. element of todolist class 
// render multiple times.

// use it
// we can use when we have to change html element or replace not add mean add with 
// previous element.

//there is one more element to add element in html property.
// document.createElement()














