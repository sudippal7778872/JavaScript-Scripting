// this keyword
const btn = document.querySelector(".btn-headline");
// btn.addEventListener("click",function(){
//     console.log("click me")
//     console.log(this);  //value of this is button itself
// })

// but in case of arrow function value of this will be windows object 
btn.addEventListener("click",()=>{
    console.log("clicked me");
    console.log(this); //window object
})














