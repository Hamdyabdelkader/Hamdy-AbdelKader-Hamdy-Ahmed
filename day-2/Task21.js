var total = 0;

for (var i = 1; i <= 5; i++) {
    var cost = +prompt("Enter cost for day " + i + ":");
    total += cost;
}

var average = total / 5;

console.log("Total = " + total);
console.log("Average = " + average);