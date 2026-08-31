const original = {name: "Mona",details: {city: "Cairo"}};
const copy = { ...original };

copy.name = "Sara";
copy.details.city = "Alex";

console.log(original);//{name: "Mona",details: {city: "Alex"}}
console.log(copy);//{name: "Sara",details: {city: "Alex"}}
//bec. shallow copy is a surface copy can't go deeep