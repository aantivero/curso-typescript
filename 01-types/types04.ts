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

