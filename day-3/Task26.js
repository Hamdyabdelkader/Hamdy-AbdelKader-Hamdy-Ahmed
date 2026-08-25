var names = ["ahmed","sara","omar","laila","hassan"];
var count = 0;
for (var i = 0; i < names.length; i++) {
    var NAMES = names[i].toUpperCase();
    if (NAMES.charAt(0) == "A" || NAMES.charAt(0) == "S") {
        console.log(NAMES);
        count++;
    }
}
console.log("Matched names: " + count);