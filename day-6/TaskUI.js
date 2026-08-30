var products = [
    { id: 1, name: "Rtx 5060", price: 22000, category: "Electronics", quantity: 4 },
    { id: 2, name: "Mouse", price: 1100, category: "Accessories", quantity: 25 },
    { id: 3, name: "Rtx 5070 Ti", price: 42000, category: "Electronics", quantity: 5 },
    { id: 4, name: "KeyBoard", price: 2000, category: "Electronics", quantity: 3 }
];


//Selector-----------------------------------------------------------------------

var form = document.querySelector("#productForm");

var nameInput = document.querySelector("#name");

var priceInput = document.querySelector("#price");

var categoryInput = document.querySelector("#category");

var quantityInput = document.querySelector("#quantity");

var addBtn = document.querySelector("#addBtn");

var updateBtn = document.querySelector("#updateBtn");

var productsBody = document.querySelector("#productsBody");

var searchInput = document.querySelector("#search");

var categoryFilter = document.querySelector("#categoryFilter");

var title = document.querySelector("#title");

var selectedId = null;


//ReadAll-----------------------------------------------------------------------

function getAllProducts() {
    return products;
}


//ReadOne-----------------------------------------------------------------------

function getProductById(id) {
    var product = products.find(function (product) {
        return product.id == +id;
    });

    if (product) {
        return product;
    }
    else {
        alert("Product not found");
    }

}


//ShowProducts-----------------------------------------------------------------------

function showProducts(list = products) {
    productsBody.innerHTML = "";

    list.forEach(function (product) {
        
        //CreatenewTR-------------------------
        var tr = document.createElement("tr");

        //ID-------------------------
        var tdId = document.createElement("td");
        tdId.textContent = product.id;

        //NAME-------------------------
        var tdName = document.createElement("td");
        tdName.textContent = product.name;

        //PRICE-------------------------
        var tdPrice = document.createElement("td");
        tdPrice.textContent = product.price;

        //CATEGORY-------------------------
        var tdCategory =document.createElement("td");
        tdCategory.textContent =product.category;

        //QUANTITY-------------------------
        var tdQuantity = document.createElement("td");  
        tdQuantity.textContent = product.quantity;


        //UpdateButtom-------------------------
        var updateButton = document.createElement("button");
        updateButton.textContent = "Update";
        updateButton.classList.add("update-row");
        updateButton.setAttribute("data-id",product.id);


        //DeleteButtom-------------------------
        var deleteButton =document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-row");
        deleteButton.setAttribute("data-id",product.id);


        //Actions-------------------------
        var tdActions =document.createElement("td");
        tdActions.appendChild(updateButton);
        tdActions.appendChild(deleteButton);


        //Add TD To TR-------------------------
        tr.appendChild(tdId);
        tr.appendChild(tdName);
        tr.appendChild(tdPrice);
        tr.appendChild(tdCategory);
        tr.appendChild(tdQuantity);
        tr.appendChild(tdActions);


        // Add TR to table-------------------------
        productsBody.appendChild(tr);
    });

}


//ClearForm--------------------------------------------------

function clearForm() {
    nameInput.value = "";
    priceInput.value = "";
    categoryInput.value = "";
    quantityInput.value = "";
    selectedId = null;

    addBtn.style.display = "inline-block";
    updateBtn.style.display = "none";
    title.textContent = "NTI Mini Store";
}


//Create-----------------------------------------------------------------------

function createProduct(name, price, category, quantity) {
    name = name.trim();
    category = category.trim();

    var exists = products.some(function (product) {
        return product.name.toLowerCase() == name.toLowerCase();
    });

    if (name == "") {
        alert("Name is required");
    }
    else if (category == "") {
        alert("Category is required");
    }
    else if (isNaN(price) || price < 0) {
        alert("Invalid price");
    }
    else if (isNaN(quantity) || quantity < 0) {
        alert("Invalid quantity");
    }
    else if (exists) {
        alert("Product already exists");
    }
    else {
        var newId;
        if (products.length == 0) {
            newId = 1;
        }
        else {
            newId = products[products.length - 1].id + 1;
        }

        var newProduct = {id: newId,name: name,price: +price,category: category,quantity: +quantity};
        products.push(newProduct);
        alert("Product added successfully");
        showProducts();
        clearForm();
        return newProduct;
    }
}


//Update-----------------------------------------------------------------------

function updateProduct(id,name,price,category,quantity) {
    var index = products.findIndex(function (product) {
        return product.id == +id;
    });
    if (index == -1) {
        alert("Product not found");
    }
    else if (name.trim() == "") {
        alert("Name is required");
    }
    else if (category.trim() == "") {
        alert("Category is required");
    }
    else if (isNaN(price) || price < 0) {
        alert("Invalid price");
    }
    else if (isNaN(quantity) || quantity < 0) {
        alert("Invalid quantity");
    }
    else {
        products[index].name = name.trim();
        products[index].price = +price;
        products[index].category = category.trim();
        products[index].quantity = +quantity;
        alert("Product updated successfully");
        showProducts();
        clearForm();
        return products[index];
    }
}


//Delete-----------------------------------------------------------------------

function deleteProduct(id) {
    var index = products.findIndex(function (product) {
        return product.id == +id;
    });
    if (index == -1) {
        alert("Product not found");
    }
    else {
        var answer = prompt("Are you sure you want to delete "+ products[index].name+ "? Type yes or no");
        if (answer.toLowerCase() == "yes") {
            products.splice(index, 1);
            alert("Product deleted successfully");
            showProducts();
        }
        else {
            console.log("Delete cancelled");
        }
    }
}


//Search/Filter-----------------------------------------------------------------------

function filterProducts(keyword) {
    keyword = keyword.trim().toLowerCase();
    return products.filter(function (product) {
        return (product.name.toLowerCase().includes(keyword) || product.category.toLowerCase().includes(keyword));
    });

}


//SubmintEvent-----------------------------------------------------------------------

form.addEventListener("submit", function (event) {
    event.preventDefault();
    createProduct(nameInput.value, priceInput.value, categoryInput.value, quantityInput.value);
});


//UpdateButtom-----------------------------------------------------------------------

updateBtn.addEventListener("click", function () {
    if (selectedId == null) {
        alert("Select a product first");
    }
    else {
        updateProduct(selectedId,nameInput.value,priceInput.value,categoryInput.value,quantityInput.value);
    }
});


//TableClickEvent-----------------------------------------------------------------------

productsBody.addEventListener("click", function (event) {
    var target = event.target;

    //Update-----------------------------------------------------------------------
    if (target.classList.contains("update-row")) {
        var id =target.getAttribute("data-id");

        var product = getProductById(id);
        if (product) {
            selectedId = product.id;
            nameInput.value = product.name;
            priceInput.value = product.price;
            categoryInput.value = product.category;
            quantityInput.value = product.quantity;


            addBtn.style.display = "none";
            updateBtn.style.display = "inline-block";
            title.innerText ="Update Product";
            nameInput.focus();
        }
    }

    //DELETE-----------------------------------------------------------------------
    else if (target.classList.contains("delete-row")) {
        var deleteId = target.getAttribute("data-id");
        deleteProduct(deleteId);
    }
});


//SearchByKeyBoardEvent-----------------------------------------------------------------------
searchInput.addEventListener("input", function () {
    var result = filterProducts(searchInput.value);
    showProducts(result);
});



//ChangeEvet-----------------------------------------------------------------------

categoryFilter.addEventListener("change",function (event) {
        var selectedCategory = event.target.value;

        if (selectedCategory == "all") {
            showProducts(products);
        }
        else {
            var result = products.filter(function (product) {
                return product.category == selectedCategory;
            });
            showProducts(result);
        }
    }
);


//FoucsEvent-----------------------------------------------------------------------

nameInput.addEventListener("focus",function () {
    console.log("Name input focused");
});


// BLUR EVENT-----------------------------------------------------------------------

nameInput.addEventListener("blur",function () {
    console.log("Name input blurred");
});


//StartUp-----------------------------------------------------------------------

updateBtn.style.display = "none";
showProducts();