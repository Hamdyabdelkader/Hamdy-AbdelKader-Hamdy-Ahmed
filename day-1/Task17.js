var city1 = "Alex";
var city2 = city1;
city2 = "Giza";
console.log(city1, city2); // Alex Giza

var car1 = { brand: "Toyota" };
var car2 = car1;
car2.brand = "Honda";
console.log(car1, car2); //honda, honda

var car1 = { brand: "Toyota" };
var car2 = Object.assign({}, car1);
car2.brand = "Honda";
console.log(car1, car2); // toyota, Honda

