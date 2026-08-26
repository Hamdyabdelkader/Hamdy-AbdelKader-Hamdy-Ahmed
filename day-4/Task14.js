var items = ["pen", "book", "bag"];
items.forEach(function(item) {
    console.log(item);
});
items.forEach(function(item, index) {
    console.log(index + ": " + item);
});;