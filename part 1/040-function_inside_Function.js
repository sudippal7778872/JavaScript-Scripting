//function inside function
// applicable for all kind of function

const app = () => {
    const addition = (num1,num2) =>{
        return num1+num2;
    }
    const multiplication = (num1,num2) =>{
        return num1*num2;
    }
    console.log("this message is from app");
    console.log(addition(4,5));
}
app();
