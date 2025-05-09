// const superHeros = []   // empty array assignment
// const superHeros: [] = []  // superHeros is of type array which is empty always
const superHeros: string[] = [] // type of string of array
// const heroPower : number[] = []
const heroPower : Array<number> = []

type User = {
    name: string
    isActive: boolean
}

const allUsers: User[] = []

const MLModels: number[][] = [
    [255, 255, 255],
    []
]

superHeros.push("spiderman")
heroPower.push(33)

allUsers.push({name: 'Abhishek', isActive: true})