function createStrictVariable() {
    "use strict";
    try {
        strictVariable = "Hello";
    } catch (error) {
        console.log(error.message);
    }
}
createStrictVariable();//refrence error
// bec. we didn't use var/let/const