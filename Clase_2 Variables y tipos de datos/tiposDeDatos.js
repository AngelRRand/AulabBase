console.log('Tipos de datos')

//Tipos primitivos


//String = Textos
//Number = Numeros
//Booleanos = True / False
//Undefined

let nombreProfesor = 'Horacio'
let edadProfesor = 23
let argentino = true
let nada = undefined

//console.log(edad)  // 10 

//console.log(typeof nombreProfesor)
//console.log(typeof edadProfesor)
//console.log(typeof argentino)


//Number==========================================================
let numeroUno = 2
let numeroDos = 'perro'

//console.log(numeroUno - numeroDos)  //NaN

let num1 = 'perro'
let num2 = 'gato'

//console.log(num1 / num2)   //NaN
//console.log(01010001)


//String=============================================================
let lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus natus tempora dignissimos magni? Ad necessitatibus voluptates quam libero commodi debitis aut pariatur voluptas voluptate laudantium placeat, recusandae explicabo quo ducimus!'
let mascota = 'Dalma'
let comida = 'croquetas'
let accion = 'duerme'

console.log('Mi mascota' + ' ' + mascota + ' ' + 'come' + ' '+ comida + ' ' + 'y luego' + ' ' + accion)

mascota = 'Tobi'
comida = 'carne'
accion = 'juga'

console.log('Mi mascota' + ' ' + mascota + ' ' + 'come' + ' '+ comida + ' ' + 'y luego' + ' ' + accion)


mascota = 'Paco'
comida = 'verdura'
accion = 'duerme'

console.log('Mi mascota' + ' ' + mascota + ' ' + 'come' + ' '+ comida + ' ' + 'y luego' + ' ' + accion)

console.log(`Mi mascota ${mascota} come ${comida} y luego ${accion}`)

//Actualizacion de 2015 
//ES6 (ECMAScript 6)

let trabajador = 'Pepe'
let trabajo = 'constructor'
let salario = 1000

//console.log("hola")
//console.log('hola')
let frase = `Hola mi nombre es ${trabajador} mi trabajo es de ${trabajo} y mi salario es de ${salario} euros`

console.log(frase)

console.log(`Hola mi nombre es ${trabajador} mi trabajo es de ${trabajo} y mi salario es de ${salario * 2} euros`)

//length nos permite en el caso de los string saber la cantidad de letras que tiene

console.log(trabajador.length)  //4
console.log(trabajador[3])      //e



//Booleanos=============================================================

let presente = true
let ausente = false

console.log(1 < 2 < 3)  //true
console.log(3 > 2 > 1)  //false



//Undefined=============================================================

let color = 'Rojo'
let colorDos 
console.log(color)  //Rojo

console.log(colorDos)  //undefined



//Null==================================================================


let numeroNada = 0   //No es null
let nombreNada = ''  //No es null
let saldo = null

console.log(saldo)











