//Clases
//tanto los métodos(funciones) y propiedades pueden ser private, public o protected

class Message {
    content: string;

    //constructor
    constructor(message: string) {
        this.content = message;
    }

    provide() {
        return "Hi, " + this.content;
    }
}

var newMessage = new Message("World!!!");
console.log(newMessage.provide());

//accessors GET/SET
class User {
    private _password: string;

    get password(): string {
        return this._password;
    }

    set password(p: string) {
        if (p != '123456') {
            this._password = p;
        } else {
            console.log('La password ingresada no es correcta.');
        }
    }
}

//Herencia
class Account {
    Name: string;
    constructor(name: string){
        this.Name = name;
    }
    deposit(amount: number = 0) {
        console.log(this.Name + ' deposit ' + amount);
    }
}

class Checking extends Account {
    constructor(name: string) {
        super(name);
    }
    deposit(amount = 10) {
        console.log('Deposit Checking');
        super.deposit(amount);
    }
}

class Savings extends Account {
    constructor(name: string) {
        super(name);
    }
    deposit(amount = 19) {
        console.log('Deposit Savings');
        super.deposit(amount);
    }
}

let myChecking = new Checking('BankA Checking');
let mySavings = new Savings('BankB Savings');

myChecking.deposit(100);
mySavings.deposit();