
//1
// const User = {
//     name : "Abhishek",
//     email: "abhismaurya12@gmail.com",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}){}


// // main for interview
// function createCourse(): {name: string, price: number} {
//     return {name: 'reactjs', price: 399}
// }

// // createUser({'Abhishek', true})

// let newUser = {name: 'Abhishek', isPaid: 'true', email: "abhis@gmail.com"}
// createUser(newUser);


//2
// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }

// type Mystring = string;

// function createUser(user: User){
//     return {name: '', email: '', isActive: true}
// }

// createUser({name: '', email: '', isActive: true})

//3
type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    credcardDeails?: number // optional element 
}

// function createUser(u: User){}
let myUser: User = {
    _id: '1234',
    name: "Abhishek",
    email: "abhis@gmail.com",
    isActive: false
}

myUser.email = "abhi@gmail.com"
// myUser._id = "adsdf"  // can't change read only attribute

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

export{}