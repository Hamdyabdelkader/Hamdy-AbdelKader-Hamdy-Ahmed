var correctPin = "1234";
var attempts = 0;

while (attempts < 3) {
    var pin = prompt("Enter PIN:");
    attempts++;

    if (pin === correctPin) {
        console.log("Login successful");
        brea
    }

 else if (attempts === 3) {
        console.log("Login failed");
    }
}
