var products = [
{ id: 1, name: "Rtx 5060", price: 22000, category: "Electronics", quantity: 4 },
{ id: 2, name: "Mouse", price: 1100, category: "Accessories", quantity: 25 },
{ id: 3, name: "Rtx 5070 Ti", price: 42000, category: "Electronics", quantity: 5 },
{ id: 4, name: "KeyBoard", price: 2000, category: "Electronics", quantity: 3 }
];
// Create---------------------------------------------------------------------------------

function createProduct(name, price, category, quantity) {
name = name.trim();
category = category.trim();

if (name == "") {
console.log("Error!! name is required");
} 
else if (category == "") {
console.log("Error: category is required");
}
else if (isNaN(price) || price < 0) {
console.log("Error!! invalid price");
}
 else if (isNaN(quantity) || quantity < 0) {
console.log("Error:!! invalid quantity");
}
else {
var exists = products.some(function (product) {
return product.name.toLowerCase() == name.toLowerCase();
});

if (exists) {
console.log("Error!! product already exists");
} 
else {
var newId = products[products.length - 1].id + 1;
var newProduct = {id: newId,name: name,price: +price,category: category,quantity: +quantity};
products.push(newProduct);
return newProduct;
}}}


//read all--------------------------------------------------------

function getAllProducts() {
    return products;
}

function printProducts(list) {
    console.table(list);
}

//read one-------------------------------------------------

function getProductById(id) {
var product = products.find(function (product) {
return product.id == +id;
});
if (product) {
return product;
} 
else {
console.log("Error: product not found");
}}

//update------------------------------------------------

function updateProduct(id, name, price, category, quantity) {
var index = products.findIndex(function (product) {
return product.id == +id;
});
if (index == -1) {
console.log("Error!! product not found");
} 
else if (name.trim() == "") {
console.log("Error: name is required");
}
else if (category.trim() == "") {
console.log("Error!! category is required");
} 
else if (isNaN(price) || price < 0) {
console.log("Error!! invalid price");
} 
else if (isNaN(quantity) || quantity < 0) {
console.log("Error!! invalid quantity");
} 
else {
products[index].name = name.trim();
products[index].price = +price;
products[index].category = category.trim();
products[index].quantity = +quantity;
return products[index];
}}

//delete---------------------------------------------------------
function deleteProduct(id) {
var index = products.findIndex(function (product) {
    return product.id == +id;
});

if (index == -1) {
console.log("Error!! not found");
} 
else {
var answer = prompt("Are you sure you want to delete " +products[index].name +"? Type yes or no");
if (answer.toLowerCase() == "yes") {
return products.splice(index, 1);
} 
else {
console.log("Delete cancelled");
}}}
//filter&search---------------------------------------

function filterProducts(keyword) {
keyword = keyword.trim().toLowerCase();

return products.filter(function (product) {
return product.name.toLowerCase().includes(keyword) ||product.category.toLowerCase().includes(keyword);

});
}


//interactive Menu-----------------------------------------------------------------------------------------------

function startApp() {
var run = true;

while (run) {
var choice = prompt(
"===== NTI Mini Store =====\n" +
"1) Add product\n" +
"2) Show all products\n" +
"3) Show product by ID\n" +
"4) Update product\n" +
"5) Delete product\n" +
"6) Search / Filter\n" +
"0) Exit"
);

if (choice == null) {
run = false;
} 
else {
switch (choice.trim()) {

case "1":
var name = prompt("Enter product name:");
var price = parseInt(prompt("Enter price:"));
var category = prompt("Enter category:");
var quantity = parseInt(prompt("Enter quantity:"));

if (name == null ||category == null ||isNaN(price) ||isNaN(quantity)) {
alert("Invalid input");
} 
else {
var newProduct = createProduct(name,price,category,quantity);
if (newProduct) {
console.log(newProduct);
alert("Product added successfully");
}}
break;

case "2":
printProducts(getAllProducts());
break;

case "3":
var id = parseInt(prompt("Enter product ID:"));
if (isNaN(id)) {
alert("Invalid ID");
}
else {
var product = getProductById(id);
if (product) {
console.log(product);
}}
break;

case "4":

var newId = parseInt(prompt("Enter product ID:"));
var newName = prompt("Enter new name:");
var newPrice = parseFloat(prompt("Enter new price:"));
var newCategory = prompt("Enter new category:");
var newQuantity = parseInt(prompt("Enter new quantity:"));
if (isNaN(newId) ||newName === null ||newCategory === null ||isNaN(newPrice) ||isNaN(newQuantity)) {
alert("Invalid input");
}
else {
var updatedProduct = updateProduct(newId,newName,newPrice,newCategory,newQuantity);
if (updatedProduct) {
console.log(updatedProduct);
alert("Product updated successfully");
}}
 break;

case "5":
var deleteId = parseInt(prompt("Enter product ID:"));
if (isNaN(deleteId)) {
alert("Invalid ID");
}
else {
var deleted = deleteProduct(deleteId);
if (deleted) {
alert("Product deleted successfully");
}}
break;

case "6":
var keyword = prompt("Enter name or category:");
if (keyword == null) {
alert("Search cancelled");
} 
else {
var filteredProducts =filterProducts(keyword);
printProducts(filteredProducts);
}
break;

case "0":
run = false;
alert("Goodbye!");
break;

default:
alert("Invalid choice");
}}}}

//B1-----------------------------------------------------------------------------------------

function addUnReapeatedProduct(name, price, category, quantity) {
var exists = products.some(function (product) {
return product.name.toLowerCase() == name.trim().toLowerCase();
});

if (exists) {
console.log("Error: product already exists");
} 
else {
return createProduct(name, price, category, quantity);
}}

//B2---------------------------------------------------------------

function sortByPrice(order = "asc") {
return products.slice().toSorted(function (a, b) {
if (order == "asc") {
return a.price - b.price;
} 
else if (order == "desc"){
    return b.price - a.price;
}
});
}

//B3------------------------------------------------------------------------------------------------------------------------------------

function getStoreStats() {
var totalProducts = products.length;
var totalStock = products.reduce(function (sum, product) {
return sum + product.quantity;
}, 0);

var totalValue = products.reduce(function (sum, product) {
return sum + product.price * product.quantity;
}, 0);

var averagePrice = products.reduce(function (sum, product) {
return sum + product.price;
}, 0) / products.length;

var outOfStock = products.reduce(function (count, product) {
if (product.quantity === 0) {
return count + 1;
} 
else {
return count;
}
}, 0);

return {
totalProducts: totalProducts,
totalStock: totalStock,
totalValue: totalValue,
averagePrice: averagePrice.toFixed(2),
outOfStock: outOfStock
};
}


//B4---------------------------------------------------------------

function groupByCategory() {
return products.reduce(function (groups, product) {
if (!groups[product.category]) {
groups[product.category] = [];
}
groups[product.category].push(product);
return groups;
}, {});
}

//B5----------------------------------------------

function filterByPrice(min = 0, max = Infinity) {
return products.filter(function (product) {
 return product.price >= min &&product.price <= max;
});
}

//B6---------------------------------------------------------

const inStock = (list) =>list.filter(product => product.quantity > 0);
function withAfterAction(fn, callback) {
var result = fn();
callback("Done");
return result;
}

//B7---------------------------------------------------------

var store = (function () {
return {getAll: function () {return products;    
},
getById: function (id) {return getProductById(id);
},
add: function (name, price, category, quantity) {return createProduct(name, price, category, quantity);
},
update: function (id, name, price, category, quantity) {return updateProduct(id,name,price,category,quantity);
},
remove: function (id) {return deleteProduct(id);
},
search: function (keyword) {return filterProducts(keyword);
}
};
})();

//B8--------------------------------------------------------------------------
function addMany(...items) {
items.forEach(function (item) {
createProduct(item.name,item.price,item.category,item.quantity);
});
return products;
}


startApp();

