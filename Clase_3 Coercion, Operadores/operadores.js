//Operador de asignacion

//Un igual es un operador de asignacion

let animal = 'Perro'

animal = 'Gato'

let num = 2

num = num * 2


//Operador Aritmético


let a = 2
let b = 5
let c = 10


//Suma     =======> +
a + b
2 + 5


//Resta   ======> -
a - b
2 - 5


//Multiplicacion    =====> *
a * b
2 - 5


//Division    =======> /
a / b
2 / 5


//Restante  ====> %
c % b
10 % 5




//Operaciones de Incremento

let operador = 3

console.log(++operador)
console.log(operador + 10) 
console.log(operador += 10)

//Operaciones de Decremento

let operadorDecrement = 3

console.log(--operador)
console.log(operador - 10) 
console.log(operador -= 10)

//Operaciones Elevado
let elavado = 3
console.log(elavado ** 3)



//Operaciones comparacion

let presente = true
let ausente = false

//console.log(presente == ausente)   //false
//console.log(presente != ausente)   //true

let edad = 23
let saldo = 23

//console.log(edad == saldo)           //true
//console.log(edad >= saldo)           //true
//console.log(edad < saldo)            //false

let nombre1 = 'horacio'
let nombre2 = 'horacio'

//console.log(nombre1 == nombre2)      //true

let numeroUno = 11
let numeroDos = '11'

//De forma abstracta
//console.log(numeroUno == numeroDos)  //true

//De forma estricta
//console.log(numeroUno === numeroDos) //false





//Operadores AN y OR

let num1 = 1
let num2 = 1
let num3 = 1
let num4 = 1
let num5 = 100

//AN

console.log(num1 === num2 && num3 === num4)  //true
//             true            true

console.log(num1 === num2 && num3 === num5)  //false
//              true            false


//OR

console.log(num1 === num2 || num3 === num5)   //true
//               true            false


console.log(num1 === num5 || num3 === num5)   //false
//               false            false



