var cities = ["Cairo", "Giza", "Alex", "Aswan"];
var city = cities.find(function(city) {
    return city.startsWith("A");
});
var index = cities.findIndex(function(city) {
    return city.startsWith("A");
});

console.log(city);
console.log(index);