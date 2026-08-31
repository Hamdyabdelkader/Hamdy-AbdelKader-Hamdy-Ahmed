function deleteWithStrict() {
   "use strict";
    var localVar = "Local var";
    try {
        delete localVar; //syntaxerror bec. we are using strict
    } catch (error) {
        console.log(error.message);
    }
    var user = {
        name: "Hamdy"
    };
    console.log(user);//
    delete user.name;//{ name: "Hamdy" }
    console.log(user);//{}
}
//we can't use delete while useing strict