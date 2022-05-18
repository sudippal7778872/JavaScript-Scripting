//promise and setTimeout

// now we want to resolve / reject promise after two second

function myPromise(){
    return new Promise((resolve, reject)=>{
        const value =true;
        setTimeout(()=>{
            if(value){
                resolve();
            }else{
                reject();
            }
        },2000)
    })
}

myPromise()
    .then(()=>{console.log("resolve")})
    .catch(()=>{console.log("reject")});









