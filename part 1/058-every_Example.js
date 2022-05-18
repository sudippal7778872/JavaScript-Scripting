//every
//Real World Example

const userCart = [
    {productId:1, ProductName:"p1",price:20000},
    {productId:1, ProductName:"p2",price:10000},
    {productId:1, ProductName:"p3",price:30000},
    {productId:1, ProductName:"p4",price:40000},
];
//now we check every product price more than 50000
//now we check every product price more than 30000
//condition 50000
const answer1 = userCart.every((obj)=>{
    return obj.price<=50000;
})
console.log("every product <50000",answer1);
//next condition 30000
const answer2 = userCart.every((obj)=>{
    return obj.price<=30000;
})
console.log("every product <30000",answer2);


