//attach event with multiple button
const allButtons = document.querySelectorAll(".my-buttons button");
// for(let button of allButtons){
//     button.addEventListener("click",function(){
//         console.log("you clicked me !!!!!!");
//     })
// }


//now we want to print the text off button when we click on that.
for(let button of allButtons){
    button.addEventListener("click",function(){
        console.log(this.textContent);
    })
}










