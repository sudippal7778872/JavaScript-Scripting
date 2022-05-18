//how to get dimention of elements.

//here we want to see the height and width of section-todo class.
const sectionTodo = document.querySelector(".section-todo");
const info = sectionTodo.getBoundingClientRect(); //giveall the details
console.log(info);

//height and width
const h = sectionTodo.getBoundingClientRect().height;
const w = sectionTodo.getBoundingClientRect().height;
console.log(h);
console.log(w);











