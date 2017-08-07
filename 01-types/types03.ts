class User {

    fullname: string;

    constructor(firstname: string, surname: string) {
        this.fullname = firstname + ' ' + surname;
    }

    hello(): string {
        return `Hello, ${this.fullname}`;
    }
}

var user = new User('Alejandro', 'Antivero');
console.log(user.hello());

let users: Array<User> = [
    new User('NameA', 'SurnameA'),
    new User('NameB', 'SurnameB'),
    new User('NameX', 'SurnameX')
];