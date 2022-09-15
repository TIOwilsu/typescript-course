"use strict";
let items = [2, 'teste'];
items = [1, 'oi'];
let car = {
    port: 4,
    window: 5,
    name: 'Carro veloz'
};
car = { port: 2, window: 3, name: 'carro de velocista' };
var User;
(function (User) {
    User["NAME"] = "Wilson";
    User[User["AGE"] = 26] = "AGE";
})(User || (User = {}));
User.AGE;
User.NAME;
let calcsSomething = (param1, param2) => {
    return +param1 + +param2;
};
let method = calcsSomething;
let getSomething = (param1, param2) => {
    const concatente = `${param1} ${param2}`;
    return concatente;
};
let printSomething = (param1, param2) => {
    const concatente = `${param1} ${param2}`;
    console.log(concatente);
};
const button = document.getElementById("button");
class Student {
    constructor(name) {
        this.name = name;
    }
}
const student = new Student('Leonardo');
console.log(student);
