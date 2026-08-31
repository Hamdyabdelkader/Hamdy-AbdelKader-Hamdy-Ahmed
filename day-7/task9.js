function testBlock() {
    if (true) {
        let a = 10;
        const b = 20;
        console.log(a);//10
        console.log(b);//20
        //bec. if is block scope 
    }
    console.log(a); //Error 
    console.log(b); //Error
    //bec. it have no access to if block
}