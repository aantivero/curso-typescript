//arrays
let positions: number[] = [1, 2, 3, 4];
let positionsArr: Array<number> = [1, 2, 3, 4];


//tuples
let msg: [string, number]; //definición
msg = ['new', 1000];
//acceder a un elemento
console.log(msg[0].substr(1));
//no existe un substr de number
//console.log(msg[1].substr(1));
//acceder a un elemento por fuera del conjunto de indices conocidos se aplica un tipo de union
msg[3] = 'modify';//ok, string puede asignarse to (string | number)
console.log(msg[3].toString());//ok, 'string' y 'number' tienen toString
//x[6] = true; error no puede asignarse
console.log(msg);

//enums
enum Color {Red, Green, Blue};
let c: Color = Color.Green;
console.log(c);
//por default los miembros empiezan en cero, se puede modificar manualmente
enum ColorB {Red = 1, Green, Blue};
let cb: ColorB = ColorB.Green;
console.log(cb);
enum ColorX {Red = 20, Green = 40, Blue = 60};
let cx: ColorX = ColorX.Blue;
console.log(cx);

let colorName: string = ColorB[2];
console.log(colorName);

enum LogLevel {Error = 'Error', Warning = 'Warning', Debug = 'Debug'};
let businessError: LogLevel = LogLevel.Warning;
console.log(businessError);



