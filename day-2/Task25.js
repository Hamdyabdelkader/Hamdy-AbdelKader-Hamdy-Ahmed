    var n = +prompt("Enter a number:");

if (n < 0) {
    console.log("Error");
} 
else {
    var factorial = 1;

    for (var i = 1; i <= n; i++) {
        factorial *= i;
    }

    console.log(n + "! = " + factorial);
    window.alert(n + "! = " + factorial);
}