// add html element in page
// document.createElement();
// append
// prepend
// remove
// before
// after


// document.createElement();
// append

// const newTodoItem = document.createElement("li");
// const newTodoItemText = document.createTextNode("Teach Student");
// const todoList = document.querySelector(".todo-list"); 
// newTodoItem.append(newTodoItemText);
// todoList.append(newTodoItem);
// console.log(newTodoItem);

// another way 
// const newTodoItem = document.createElement("li");
// newTodoItem.textContent="teach student";
// const todoList = document.querySelector(".todo-list"); 
// todoList.append(newTodoItem);
// console.log(newTodoItem);

//append add the item at the end while prepend add the item at the begining.
//prepend
// const newTodoItem = document.createElement("li");
// newTodoItem.textContent="teach student";
// const todoList = document.querySelector(".todo-list"); 
// todoList.prepend(newTodoItem); //add the item at the begining of the element.
// console.log(newTodoItem);

//remove
// now we want to remove the todo 
// const todo1 = document.querySelector(".todo-list li");
// todo1.remove();
// console.log(todo1);

/*append and prepend is used to add the item inside the tag end and begining. while
after and before is used to add the element outside of the tag end and begining.
example: here append and prepend add the item inside <ul> tag begining or end of <li>
tag. while after and before will add that begining or end of <ul> tag.
*/ 
//before
// const newTodoItem = document.createElement("li");
// newTodoItem.textContent="teach student";
// const todoList = document.querySelector(".todo-list");
// todoList.before(newTodoItem);

//after
const newTodoItem = document.createElement("li");
newTodoItem.textContent="teach student";
const todoList = document.querySelector(".todo-list");
todoList.after(newTodoItem);
