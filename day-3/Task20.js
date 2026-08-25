for (var i = 1; i <= 30; i++) {
if (i % 3 == 0) {
        continue;
    } 
    if (i == 25) {
        break;
    }
    console.log(i);
}