const userdata = {name: "Ahmed",age: 26,city: "Alex"};

localStorage.setItem("userdata", JSON.stringify(userdata));//storage
const savedData = localStorage.getItem("userdata");
const parsedData = JSON.parse(savedData);//read

console.log(typeof parsedData);//object
console.log(parsedData);//{name: "Ahmed",age: 26,city: "Alex"}


console.log(parsedData.name);//Ahmed
console.log(parsedData.age);//26
console.log(parsedData.city);//Alex

localStorage.removeItem("userdata");