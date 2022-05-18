// // add or remove classList
const sectionTodo = document.querySelector(".section-todo");
console.log(sectionTodo);
// //if we use classList property it will show us DOMList mean number of class in it.
// console.log(sectionTodo.classList); //DOMTokenList(2) ['section-todo', 'container', value: 'section-todo container']

// /*now we make a bg-dark class in style sheet. till now we didnot assign it.now we
//  to assign this class to a tag which contain section-todo class.
// */
// sectionTodo.classList.add("bg-dark");
// console.log(sectionTodo.classList); //DOMTokenList(3) ['section-todo', 'container', 'bg-dark', value: 'section-todo container bg-dark']

// console.log("----------------------------remove-----------------------");
// //now there is three class. now we want to remove container class.
// sectionTodo.classList.remove("container");
// console.log(sectionTodo.classList);//DOMTokenList(2) ['section-todo', 'bg-dark', value: 'section-todo bg-dark']

//now we want to check any specific class is exist or not
const ans = sectionTodo.classList.contains("container"); //return true or false
console.log(ans);

//toggle method
/*
if the tag contain that class then toggle will remove it. if it is not there toggle
will add it.
*/
sectionTodo.classList.toggle("container");













