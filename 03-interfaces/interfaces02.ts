interface UserAccount {
    username: string;
    password: string;
    confirmPassword?: string; //optional no requerido
}

let userAccount: UserAccount;

//userAccount = {username: 'test', anyOther: 5};

//userAccount = {username: 'test', password: 'secret', confirmPassword: 'secret'};

userAccount = {username: 'test', password: 'secret'};

interface BankAccount {
    deposit(amount: number): void;
}

let basicAccount: BankAccount = <BankAccount>{
    deposit: function (amount: number) {
        //... hacer algo
    }
}

