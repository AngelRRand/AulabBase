//Forma de declarar un array
let array = []

//console.log(array)


//Diferencia con un valor normal
let mascota = 'perro'

//Tiene multiples valores
let tren = ['gato', 'perro', 'caballo']

//console.log(mascota[0])

//console.log(tren)

let tren1 = ['gato', 3, true, undefined]

//console.log(tren1)



//Modificar el valor de un valor dentro de un array


//Ejemplo 1
let mascota1 = 'loro'

mascota1 = 'caballo'

let tren2 = ['gato', 3, true, 'perro']

tren2[0] = 'oveja'

//console.log(tren2)


//Ejemplo 2

let listaAlumnos = ['Pepe', 'Paco', 'Ana', 'Lorenzo', 'Antonio', 'Pepe', 'Paco', 'Ana', 'Lorenzo', 'Antonio', 'gato', 3, true, 'perro']

let cantidadAlumnos = listaAlumnos.length
console.log(cantidadAlumnos)
listaAlumnos[cantidadAlumnos - 1] = 'ALEJANDRA'
listaAlumnos[cantidadAlumnos] = 'HORI'
console.log(listaAlumnos)



//Ejemplo 3

let lenguajes = ['Javascript', 'CSS', 'HTML', 'PHP']

let puntajesLenguajes = [
    ['Javascript', 100],   
    ['CSS', 50],            
    ['HTML', 10],          
    ['PHP', 1]              
]


puntajesLenguajes[1][0] = 'Boostrap'


let lenguaje = 'Python'
lenguaje = 'Java'
//Cuidado con modificar el valor total de nuestro array!!!!!
//puntajesLenguajes = 'Boostrap'

console.log(puntajesLenguajes)



