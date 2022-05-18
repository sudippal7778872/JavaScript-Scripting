//reduce
//Real world Example(flipcart)

const userCart = [
    {productId: 1, productName: "Mobile", price: 10000},
    {productId: 2, productName: "Laptop", price: 20000},
    {productId: 3, productName: "TV", price: 5000},
];

const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
    return totalPrice + currentProduct.price;
},0)
console.log(totalAmount); 

