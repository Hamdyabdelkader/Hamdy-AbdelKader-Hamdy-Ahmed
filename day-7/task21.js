function greet(name = "Guest", message = "Hello") {
    return `${message}, ${name}!`;
}

console.log(greet("Hamdy","Hi"));
console.log(greet("Ahmed"));
console.log(greet());