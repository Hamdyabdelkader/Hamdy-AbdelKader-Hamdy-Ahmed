var numbers = [5, 10, 15, 20];
var total = numbers.reduce(function(sum, number) {
    return sum + number;
}, 0);
console.log(total);