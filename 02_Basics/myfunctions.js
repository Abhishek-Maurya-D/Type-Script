"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//1 - function concept - number type
function addTwo(num) {
    // num.toUpperCase()
    return num + 2;
    // return "Hello";
}
var addtwovar = addTwo(4);
console.log(addtwovar);
//2 - string type function
function getUpper(val) {
    return val.toUpperCase();
}
var str = getUpper("4");
console.log(str);
//3 - function inline declaration with constrants types
//let loginUser = (name: string, email:string, isPaid: boolean = false) => {}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) {
        isPaid = false;
    }
};
loginUser("Abhi", "abhi@gmail.com", 600);
console.log(loginUser);
//4 function declaration and its calling with parameters
function signUpUser(name, email, isPaid) {
    return name;
}
var abhi = signUpUser("Abhishek", "abhishek3@gmail.com", false);
console.log(abhi);
//5 function with return type declaration -- can return both boolean or string
function getValue(myVal) {
    if (myVal > 6)
        return true;
    else
        return "200 OK";
}
console.log(getValue(4));
//6 function declaration with string as a type of return 
var getHello = function (s) {
    return "";
};
console.log(getHello("Abhishek"));
// 7 function declaration and changing it to map with values and printing out that
var heroes = ["thor", "spiderman", "ironman"];
heroes.map(function (hero) {
    console.log("hero is ".concat(hero));
});
// 8 function declared as a return type of string 
var heros = [1, 2, 3];
heros.map(function (hero) {
    console.log("hero is ".concat(hero));
    return "hero is ".concat(hero);
});
// 9 error printing through void function
function consoleError(errmsg) {
    console.log(errmsg);
}
consoleError("error");
