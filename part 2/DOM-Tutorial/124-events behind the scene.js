// console.log("----script start-----");
// const allButtons = document.querySelectorAll(".my-buttons button");
// allButtons.forEach((button)=>{
//     button.addEventListener("click",(e)=>{
//         console.log(e.currentTarget.textContent);
//     })
// })

// console.log("----script end-----");

//now we wat to slow the button action. by for loop
console.log("----script start-----");
const allButtons = document.querySelectorAll(".my-buttons button");
allButtons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        let a=0;
        for(let i=0; i<=1000000000;i++){
            a+=i
        }
        console.log(e.currentTarget.textContent,a);
    })
})
let b=0;
for(let i=0; i<=100000000;i++){
    b+=i
}
console.log(b);
console.log("----script end-----");









