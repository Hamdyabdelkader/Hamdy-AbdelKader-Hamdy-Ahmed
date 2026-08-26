var ages = [16, 21, 17, 19];
var someResult = ages.some(function(age) {
    return age >= 18;
});
var everyResult = ages.every(function(age) {
    return age >= 18;
});
console.log(someResult);
console.log(everyResult);