function testVar() {
    if (true) {
        var x = 10;
    }
    console.log(x);//10 bec. if is in function and var is function scope
}
testVar();