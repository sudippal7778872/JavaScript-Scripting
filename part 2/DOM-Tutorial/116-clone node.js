//clone nodes
const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "new todo";
ul.append(li);
// ul.prepend(li);
/*
we cant be able to append and prepend both at a time. for that we need to clone.
*/
const li2 = li.cloneNode(true) //due to true clone the child node as well.
ul.prepend(li2);








