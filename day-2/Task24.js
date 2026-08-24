var a = 40;
var b = 50;
var c = "60";
var d = 30;
var e = 30;

console.log(a + b + c + d + e); // 90603030 


var total = a + b + +c + d + e; // 210 

if (total >= 20) {
    for (var i = 1; i <= total; i++) {
        console.log(i);
    }
}
 else {
    console.log(" too big to print line by line");
}