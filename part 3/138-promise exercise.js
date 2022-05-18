// here we solve our previous problem pyramid of doom or callback hell.
// exercise:1
// Text       Delay   Color

// one        1s      Violet
// two        2s      purple
// three      2s      red
// four       1s      Pink
// five       2s      green
// six        3s      blue
// seven      1s      brown


const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");


function changeText(element, text, color, timeDelay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (element) {
                element.textContent = text;
                element.style.color = color;
                resolve();
            } else {
                reject("element no found");
            }
        }, timeDelay)
    })
}

// changeText(heading1, "one","violet",1000)
// .then(()=>{
//     return changeText(heading2, "two","purple",2000)
// })
// .then(()=>{
//     return changeText(heading3, "three","red",2000)
// })
// .then(()=>{
//     return changeText(heading4, "four","pink",1000)
// })
// .then(()=>{
//     return changeText(heading5, "five","green",2000)
// })
// .then(()=>{
//     return changeText(heading6, "six","blue",1000)
// })
// .then(()=>{
//     return changeText(heading7, "seven","brown",3000)
// })
// .then(()=>{
//     return changeText(heading8, "eight","yellow",1000)
// })
// .then(()=>{
//     return changeText(heading9, "nine","orange",1000)
// })
// .then(()=>{
//     return changeText(heading10, "ten","gray",1000)
// }).catch((error)=>{
//     alert(error);
// })

// now we know we can write in single line if there is only return statement in arrow
//function. we can remove the return keyword. if only the return statement no need to
// write return keyword.
// in short way it will be like:-
changeText(heading1, "one","violet",1000)
.then(()=> changeText(heading2, "two","purple",2000)) //we remove the return keyword and braket
.then(()=> changeText(heading3, "three","red",2000))
.then(()=> changeText(heading4, "four","pink",1000))
.then(()=>changeText(heading5, "five","green",2000))
.then(()=>changeText(heading6, "six","blue",1000))
.then(()=> changeText(heading7, "seven","brown",3000))
.then(()=> changeText(heading8, "eight","yellow",1000))
.then(()=>changeText(heading9, "nine","orange",1000))
.then(()=> changeText(heading10, "ten","gray",1000))
.catch((error)=>{
    alert(error);
})






