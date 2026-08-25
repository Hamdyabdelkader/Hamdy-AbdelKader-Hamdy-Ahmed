for (var i = 1; i <= 4; i++) {
    var x = " ";
    for (var j = 1; j <= i; j++) {
        x = x + "* ";
    }
    console.log(x);
}

// طريقة تانية من غير  Nested loop
// for (var i = 1; i <= 4; i++) {
//     console.log("* ".repeat(i));  
// }