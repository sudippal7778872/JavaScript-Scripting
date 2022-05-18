// event bubbleing / event propagation
// event captureing
// event delegation 


const grandParent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");


// //bubbling
// //adding event on child
// child.addEventListener("click", (e)=>{
//     console.log("bubbling !!!! child.");
// });
// //adding event on parents
// parent.addEventListener("click", (e)=>{
//     console.log("bubbling !!!! parent."); 
// });
// //adding event on grandParents
// grandParent.addEventListener("click", (e)=>{
//     console.log("bubbling !!!! grandParent."); 
// });
// //adding event on body
// document.body.addEventListener("click", (e)=>{
//     console.log("bubbling !!!! body."); 
// });

// // capturing

// //adding event on child
// child.addEventListener("click", (e)=>{
//     console.log("capturing !!!! child.");
// },true);
// //adding event on parents
// parent.addEventListener("click", (e)=>{
//     console.log("capturing !!!! parent."); 
// },true);
// //adding event on grandParents
// grandParent.addEventListener("click", (e)=>{
//     console.log("capturing !!!! grandParent."); 
// },true);
// //adding event on body
// document.body.addEventListener("click", (e)=>{
//     console.log("capturing !!!! body."); 
// },true);

/*
the cycle is always start from capturing and end at bubbleing.
o/p:-   capturing !!!! body.
        capturing !!!! grandParent.
        capturing !!!! parent.
        capturing !!!! child.
        bubbling !!!! child.
        bubbling !!!! parent.
        bubbling !!!! grandParent.
        bubbling !!!! body.
*/
// -----------------------------------------------------------------------------------

//event delegation
//adding event on grandParents
grandParent.addEventListener("click", (e)=>{
    // console.log("bubbling !!!! grandParent."); 
    console.log(e.target); // expand to target property
    console.log(e.target.textContent);
});
//now if we want to see where we have click. for that we can print event. in event 
// there is target property. that will tell us what is the target. 
//target will tell us where we have clicked.





