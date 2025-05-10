// Union in typeScript --- it will merge different types of data type into a one where we can define the vaiable of any of the type 

// 1
let score:number | string = 33;
score = 55;
score = "44";

// 2
type User = {
    name : string
    id : number
}
type Admin = {
    username : string
    id : number
}
// initialising hitesh as a user
let hitesh: User | Admin = {
    name: "Hitesh",
    id: 334
}
// initialising hitesh as a admin
hitesh = {username: "Hitesh", id:334}

// 3 Union in function 
// function getDbId(id: number | string){
//     // making some API calls
//     console.log(`DB id is : ${id}`);
// }
getDbId(4);
getDbId("87");
// function with union as a parameter taking 
function getDbId(id : number | string){
    if( typeof id === "string" ){
        id.toLocaleLowerCase();
    }
}

// 4 union in array
const data : number[] = [1, 2, 3];
const data2 : string[] = ["1", "2", "3", "4"];
// const data3 : number[] | string[] = [1, 2, 3, "4"]; // not allowed -- both type at a single time is not possible
// for that
const data6 : (number | string | boolean)[] = [1, 2, true, "4", 4]; // allowed
const data4 : number[] | string[] = [1, 2, 3]; // allowed
const data5 : number[] | string[] = ["1", "2", "3"]; // allowed

//5 union in variable declaration
let seatAllotment : "aisle" | "middle" | "window";
seatAllotment = "aisle";