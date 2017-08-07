//igual que Javascript
var x = 123;

//boolean
let finalizado: boolean = true;

//number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;

//string
let color: string = "blue";
color = 'red';
const red = 'red';
//red = 'crimson'; no se puede asignar a una constante

//template string
let fullName = `Alejandro Alberto Antivero`;
let age: number = 39;
let message: string = `Hello, my name is ${fullName}

I'll be ${age + 1} years old next year.`
//console.log(message);
//lo anterior es equivalente a :
let messageOld: string = "Hello, my name is " + fullName + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month";
//console.log(messageOld);

