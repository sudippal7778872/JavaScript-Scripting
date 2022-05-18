// now we want to add "done" and "remove" button in page. and there corresponding action.
const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(todoInput.value);
    const newTodoText = todoInput.value;
    const newLi = document.createElement("li");
    const newInnerHtml = `
    <span class="text">${newTodoText}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>`
    newLi.innerHTML = newInnerHtml;
    // console.log(newLi);
    // console.log(todoList);
    todoList.append(newLi);
    todoInput.value = "";
})

todoList.addEventListener("click", (e) => {
    //console.log(e.target);//this will give us where we click."done" "remove" or else
    //now we have classList property
    //console.log(e.target.classList);//this will give the class List of clicked item.
    if (e.target.classList.contains("remove")) {
        // console.log("you want to remove this?");
        const targatedLi = e.target.parentNode.parentNode;
        targatedLi.remove();
    }
    if (e.target.classList.contains("done")) {
        // console.log("Great!!");
        //now we want to select the span tag under ul
        const liSpan = e.target.parentNode.previousElementSibling;
        // console.log(liSpan);
        liSpan.style.textDecoration = "line-through";
    }
})





/*
when ever we click on submit our webpage reload. to prevent from this reload we use
preventDefault() method.
*/











