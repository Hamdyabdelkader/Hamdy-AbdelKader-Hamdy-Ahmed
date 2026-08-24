var start = +prompt("Enter start number:");
var end = +prompt("Enter end number:");

for (var i = start; i <= end; i++) {
    if (i % 2 == 0) {
        console.log(i + " express");
    } 
    else {
        console.log(i + " normal");
    }
}