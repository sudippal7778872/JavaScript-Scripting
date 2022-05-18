//callback callback hell pyramid of doom
//asynchronous programming

// exercise 1: we want to change color and text content of all h1 tags after 1 second.
// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// setTimeout(()=>{
//     heading1.textContent = "Heading 1";
//     heading1.style.color = "violet";
// },1000)
// setTimeout(()=>{
//     heading2.textContent = "Heading 2";
//     heading2.style.color = "red";
// },1000)

//there is no time interval both header changes at same time. to solve this one
// we have to set setTimeout into a setTimeout



// exercise:1
// Text       Delay   Color

// one        1s      Violet
// two        2s      purple
// three      2s      red
// four       1s      Pink
// five       2s      green
// six        3s      blue
// seven      1s      brown

// callback hell  
//nested of callback is known as callback hell.

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
// setTimeout(()=>{
//     heading1.textContent = "one";
//     heading1.style.color = "violet";
//     setTimeout(()=>{
//         heading2.textContent = "two";
//         heading2.style.color = "purple";
//         setTimeout(()=>{
//             heading3.textContent = "three";
//             heading3.style.color = "red";
//             setTimeout(()=>{
//                 heading4.textContent = "four";
//                 heading4.style.color = "pink";
//                 setTimeout(()=>{
//                     heading5.textContent = "five";
//                     heading5.style.color = "green";
//                     setTimeout(()=>{
//                         heading6.textContent = "six";
//                         heading6.style.color = "blue";
//                         setTimeout(()=>{
//                             heading7.textContent = "seven";
//                             heading7.style.color = "brown";
//                         },1000)
//                     },3000)
//                 },2000)
//             },1000)
//         },2000)
//     },2000)
// },1000)

//now we will do the same thing through function.

function changeText(element, text, color, timeDelay,onSuccessCallback,onFailureCallback) {
    setTimeout(() => {
        if (element) {
            element.textContent = text;
            element.style.color = color;
            if(onSuccessCallback){
                onSuccessCallback();
            }
        }else{
            if(onFailureCallback){
                onFailureCallback();
            }
        }
    },timeDelay)
}

// pyramid of doom
// callback hell
changeText(heading1, "one", "violet", 1000,()=>{
    changeText(heading2, "two", "purple", 2000,()=>{
        changeText(heading3, "three", "red", 2000,()=>{
            changeText(heading4, "four", "pink", 1000,()=>{
                changeText(heading5, "five", "green", 2000,()=>{
                    changeText(heading6, "six", "blue", 3000,()=>{
                        changeText(heading7, "seven", "brown", 1000,()=>{
    
                        },()=>{console.log("your heading does not exists")})
                    },()=>{console.log("your heading does not exists")})
                },()=>{console.log("your heading does not exists")})
            },()=>{console.log("your heading does not exists")})
        },()=>{console.log("your heading does not exists")})
    },()=>{console.log("your heading does not exists")})
},()=>{console.log("your heading does not exists")})









// solution of callback hell is promise.











