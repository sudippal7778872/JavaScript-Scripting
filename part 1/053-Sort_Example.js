//sort
//Real World Example
//flipkart lowToHigh and HighToLow option.
const product = [
    {productId:1, productName:"p1", price:300},
    {productId:1, productName:"p2", price:30},
    {productId:1, productName:"p3", price:3050},
    {productId:1, productName:"p4", price:200},
    {productId:1, productName:"p5", price:3000},
];
// //low to high
// console.log("----------------low to high-------------");
// product.sort((a,b)=>{
//     return a.price-b.price
// })
// console.log(product);

//high to low
// console.log("--------------high to low---------------");
// product.sort((a,b)=>{
//     return b.price-a.price
// })
// console.log(product);

//this changes the whole array. we does not want thet. we clone the original array.

//low to high
console.log("----------------low to high-------------");
const lowToHigh = product.slice(0).sort((a,b)=>{
    return a.price-b.price
})
console.log(product);//will be the original
console.log(lowToHigh);

//same way we can do highToLow by b.price-a.price


