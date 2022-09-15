let items: [number, string] = [2, 'teste'];

items = [1, 'oi']

let car: { port: number, window: number, name: string } = { 
    port: 4,
    window: 5, 
    name: 'Carro veloz'
}

car = { port: 2, window: 3, name: 'carro de velocista'}

enum User {
    NAME = 'Wilson',
    AGE = 26,
}

User.AGE
User.NAME

 let calcsSomething = (param1: number, param2: number) => {
    return +param1 + +param2
}

let method: (value: number, value2: number) => number = calcsSomething

let getSomething = (param1: string, param2: string) => {
    const concatente: string = `${param1} ${param2}`
    return concatente
}

let printSomething = (param1: string, param2: string): void => {
    const concatente: string = `${param1} ${param2}`
    console.log(concatente)
}

const button = document.getElementById("button")! as HTMLButtonElement;


class Student {
    constructor(public name: string) {
        
    }
}

const student = new Student('Leonardo')
console.log(student)