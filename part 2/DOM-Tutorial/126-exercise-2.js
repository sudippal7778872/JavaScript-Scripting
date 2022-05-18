// now we want to create a button. if we click on that button, the body will get a 
// random color. 

// random color

// Math.random() is method which generate arbitrary number between 0 to .9999.
// to get number between 1 to 9.999 will multiply it. like:- Math.random *10.
// for integer number need to use floor() method.
// example:- Math.floor(Math.random()*10)

// for rbg color goes 0 to 255. we use 256 to generate color. 

const mainButton = document.querySelector("button"); //selecting button
//const span = document.querySelector("span"); //selecting span tag to change content.
const span = document.querySelector(".current-color"); //selecting span tag to change content.
// console.log(mainButton);
const body = document.body;
function randomColorGenerator(){
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const randomColor = `rgb(${red}, ${green}, ${blue})`;
    return randomColor;
}
mainButton.addEventListener("click",()=>{
    const randomColor = randomColorGenerator();
    console.log(randomColor);
    body.style.background = randomColor;
    span.textContent = randomColor;
})






