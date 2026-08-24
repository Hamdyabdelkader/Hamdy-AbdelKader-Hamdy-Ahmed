var hasAccount = true;
var isVerified = false;

console.log(!hasAccount);
console.log(hasAccount || isVerified);
console.log(hasAccount && isVerified);

if (hasAccount && isVerified) {
    console.log("Welcome back");
}
 else if (hasAccount && !isVerified) {
    console.log("Please verify your account");
}
 else {
    console.log("Please sign up");
}