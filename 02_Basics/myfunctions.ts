function addTwo(num: number){
    // num.toUpperCase()
    // return num + 2;
    return "Hello";
}

function getUpper(val: string){
    return val.toUpperCase()
}

addTwo(3);

getUpper("4");

function signUpUser(name: string, email: string, isPaid: boolean){}

let loginUser = (name: string, email:string, isPaid: boolean = false) => {}

// let loginUser = (name: string, email:string, isPaid) => {
//     if (isPaid === void 0) {isPaid = false;}
// }

signUpUser("Abhishek", "abhishek3@gmail.com", false)

loginUser("Abhi", "abhi@gmail.com")

let myValue = addTwo(5);

function getValue(myVal: number): boolean{
    if(myVal>6)
        return true;
    else
        return "200 OK";
}

const getHello = (s: string):string => {
    return ""
}

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];

// heros.map((hero: string) => {
//     return  `hero is ${hero}`;
// })

heros.map((hero) : string => {
    return  `hero is ${hero}`;
})

// function consoleError (errmsg : string): void {
//     console.log(errmsg);
// }

function handleError (errmsg : string): never {
    throw new Error(errmsg);
}


export{}