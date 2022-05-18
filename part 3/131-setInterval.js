//setInterval()
//same as setTimeout it also takes a callback funtion and minimum time delay.
// after minimum delay interval time it will execute again and again.
// console.log("script start");
// setInterval(()=>{
//     console.log(Math.floor(Math.random()*10));
// },1000)
// console.log("script end");

// exercise 1:- generate background color
const body = document.body;
const button = document.querySelector("button")
const intervalId = setInterval(()=>{
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const rgb = `rgb(${red}, ${green}, ${blue})`;
    body.style.background = rgb;
},1000)

button.addEventListener("click",()=>{
    clearInterval(intervalId);
    button.textContent = body.style.background;
})






