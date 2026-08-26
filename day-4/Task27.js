var products = [
    { name: "mouse", price: 1100 },
    { name: "key board", price: 2000 },
    { name: "RTX 5060", price: 22000 }
];
var total = products.reduce(function(sum, product) {
    return sum + product.price;
}, 0);
console.log(total);