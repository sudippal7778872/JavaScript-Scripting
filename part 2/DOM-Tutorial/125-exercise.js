//on click of button color will be change.
const allButtons = document.querySelectorAll(".my-buttons button");
// console.log(allButtons)
// allButtons.forEach((button)=>{
//     button.addEventListener("click",(e)=>{
//         console.log(e.currentTarget.textContent);
//         button.style.background ="yellow";
//         button.style.color ="green";
//     })
// })

//or

allButtons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        console.log(e.currentTarget.textContent);
        e.target.style.background ="yellow";
        e.target.style.color ="green";
    })
})










