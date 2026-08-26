var products = [
    { id: 1, title: "Pen", price: 10 },
    { id: 2, title: "Book", price: 50 },
    { id: 3, title: "Bag", price: 25 }
];
var titles = products.map(function(product) {
    return product.title.toUpperCase();
});
var lessproducts = products.filter(function(product) {
    return product.price < 30;
});
var totalPrice = products.reduce(function(total, product) {
    return total + product.price;
}, 0);
console.log(titles);
console.log(lessproducts);
console.log(totalPrice); 