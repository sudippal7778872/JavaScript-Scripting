//event introdution
//click

//we have 3 way to perform event.
//1. directly we can add event property in html.
// example:- <button class="btn btn-headline" onclick="console.log('you click me')">Learn More</button>

// second way 
// select the button and attach the event
// const btn = document.querySelector(".btn-headline");
// btn.onclick = function(){
//     console.log("you clicked me !!!!!!");
// }
// console.dir(btn);

//third way
//addActionlistener method is used
const btn = document.querySelector(".btn-headline");
// function clickMe(){
//     console.log("you clicked me.");
// }
// btn.addEventListener("click",clickMe);
//or
// btn.addEventListener("click",function(){
//     console.log("click me")
// })

//arrow function
btn.addEventListener("click",()=>{
    console.log("clicked me");
})











