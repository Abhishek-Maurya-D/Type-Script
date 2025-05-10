 //1 - function concept - number type
function addTwo(num: number){
    // num.toUpperCase()
    return num + 2;
    // return "Hello";
}
let addtwovar = addTwo(4);
console.log(addtwovar);

//2 - string type function
function getUpper(val: string){
    return val.toUpperCase()
}
let str = getUpper("4");
console.log(str);

//3 - function inline declaration with constrants types
//let loginUser = (name: string, email:string, isPaid: boolean = false) => {}
let loginUser = (name: string, email:string, isPaid) => {
        if (isPaid === void 0) {isPaid = false;}
}
loginUser("Abhi", "abhi@gmail.com",600)
console.log(loginUser);

//4 function declaration and its calling with parameters
function signUpUser(name: string, email: string, isPaid: boolean){
    return name;
}
let abhi = signUpUser("Abhishek", "abhishek3@gmail.com", false)
console.log(abhi);

//5 function with return type declaration -- can return both boolean or string
function getValue(myVal: number): boolean | string{
    if(myVal>6)
        return true;
    else
        return "200 OK";
}
console.log(getValue(4));

//6 function declaration with string as a type of return 
const getHello = (s: string):string => {
    return ""
}
console.log(getHello("Abhishek"));

// 7 function declaration and changing it to map with values and printing out that
const heroes = ["thor", "spiderman", "ironman"];
heroes.map((hero: string) => {
    console.log(`hero is ${hero}`);
})

// 8 function declared as a return type of string 
const heros = [1, 2, 3];
heros.map((hero) : string => {
    console.log(`hero is ${hero}`);
    return `hero is ${hero}`;
})

// 9 error printing through void function
function consoleError (errmsg : string): void {
    console.log(errmsg);
}
consoleError("error");

// 10 error printing through never
// function handleError (errmsg : string): never {
    // throw new Error(errmsg);
// }
// handleError("error");

export{}