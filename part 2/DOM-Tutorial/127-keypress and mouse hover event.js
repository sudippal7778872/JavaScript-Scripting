// keyprees event
// mouseover event

// now here we want to know that if we press any key from keyboard at anywhere 
// of the body, then which key we have press.


//keypress
const body =document.body;
body.addEventListener("keypress",(e)=>{
    console.log(e.key); //key property is exists in event's info.
});


// mouseover
const mainButton = document.querySelector(".btn-headline");
mainButton.addEventListener("mouseover",()=>{
    console.log("!!!!!mouseover event occure!!!!!");
});

// mouseleave
mainButton.addEventListener("mouseleave",()=>{
    console.log("!!!!!mouseleave event occure!!!!!");
});






