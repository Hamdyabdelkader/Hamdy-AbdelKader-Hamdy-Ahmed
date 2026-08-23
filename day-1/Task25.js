var productName = window.prompt("Enter product name:");
var brand = window.prompt("Enter brand:");
var price = window.prompt("Enter price:");
var category = window.prompt("Enter category:");
var inStock = window.confirm("Is this product in stock?");
console.log( typepof +price);
var productInfo = {
    productName: productName,
    brand: brand,
    price: price,
    category: category,  
     inStock: inStock
};
var message = `Product: ${productName}, Brand: ${brand}, Price: ${price}, Category: ${category}, In Stock: ${inStock}`;
window.alert(message);
console.log(productInfo);
document.getElementById("result").innerText = message;
console.log(productName[0]);
