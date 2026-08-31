var n = 1;
function demo() {
    console.log(n); //undefined bec. of var n=2 inside fun. is hoisting undefined
    var n = 2;
    console.log(n);//2
}
demo();
console.log(n);//1 bec. it comes from the parent var n=1