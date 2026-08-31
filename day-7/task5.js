// Case 1

sayHi();
function sayHi() {
console.log("Hi"); //Hi bec. of fiunction decleration hoisting
}

// Case 2

sayBye();
var sayBye = function () {
console.log("Bye");//error bec. of var hoisting is undefined
};