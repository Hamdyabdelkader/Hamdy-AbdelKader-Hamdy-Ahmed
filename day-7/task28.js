const original = {name: "Mona",details: {city: "Cairo"}};

const deepCopy = structuredClone(original);

deepCopy.details.city = "Alex";

console.log(original);//{name: "Mona",details: {city: "Cairo"}}
console.log(deepCopy);//{name: "Mona",details: {city: "Alex"}}
//bec. of this is a deep copy 