//Clases
//es lo mas utilizado por Angular : Components, Services, Directives, Pipes
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
        if (p != '123456' && p != '') {
            this._password = p;
        } else {
            console.log('La password ingresada no es correcta.');
        }
    }
}

let userAccount = new User();
userAccount.password = '12345';//set
console.log(userAccount.password);//get
userAccount.password = '';

//Herencia
class BankAccount {
    Name: string;
    constructor(name: string){
        this.Name = name;
    }
    deposit(amount: number = 0) {
        console.log(this.Name + ' deposit ' + amount);
    }
}

class Checking extends BankAccount {
    constructor(name: string) {
        super(name);
    }
    deposit(amount = 10) {
        console.log('Deposit Checking');
        super.deposit(amount);
    }
}

class Savings extends BankAccount {
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

//métodos estáticos
class SystemAlert {
    static alert(message: string): void {
        console.log(message);
    }
    static warning(message: string): void {
        console.log('Warning: ' + message);
    }
    static error(message: string): void {
        console.log('Error: ' + message);
    }
}

SystemAlert.alert('Este es un mensaje');
SystemAlert.alert('Este es un warning');
SystemAlert.error('Este es un error');

//------------------------------------
//Funciones con valores por defecto
function buildMessage(message: string, level: string = 'INFO') {
    console.log(level + ' -> ' + message);
}
buildMessage('Este es un mensaje');
//la mejor manera de hacerlo
class MessageBuilder {
    buildMessage(message: string, level: string = 'INFO'): void {
        console.log(level + ' -> ' + message);
    }
}

let myMessage: MessageBuilder = new MessageBuilder();
myMessage.buildMessage('Mensajes desde un objeto', 'Error');

//podemos utilizar los parametros opcionales con el ?
class AnotherMessageBuilder {
    buildMessage(message: string, level?: string) {
        if (level) {

        }
    }
}

//parámetros al final tipo rest, siempre como último parámetro
class FooRest {
    static alertName(firstname: string, ...restOfName: string[]) {
        console.log(firstname + " " + restOfName.join(" "));
    }
}

FooRest.alertName('Alejandro', 'Alberto', 'Antivero', 'De la Unión');

//parámetros en formato JSON
class PointJSON {
    private _x: number = 0;
    private _y: number = 0;
    private _z: number = 0;

    constructor(p: {x: number; y: number; z?: number;}) {
        this._x = p.x;
        this._y = p.y;
        if (p.z)
            this._z = p.z;
    }

    is3d(): boolean {
        return this._z != 0;
    }
}
let myPoint = new PointJSON({x: 10, y: 20});
console.log(myPoint.is3d());//return false
