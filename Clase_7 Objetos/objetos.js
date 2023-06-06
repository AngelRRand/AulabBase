//Native

//Objeto Literal

let pais = {
    nombre: 'España',
    continente: 'Europa',
    habitantes: 45000000,
    comida: 'buena',
    usanEuros: true
}

console.log(pais)

//Tipo primitivo
let nombre = 'Horacio'


//Tipo reference
let producto = {
    'nombre': 'Super Taza',
    'precio': 20,
    'tipo': 'taza'
}

console.log(producto)


//En los Array
//ORDENADO POR NUMEROS
let numbers = [100, 200]

console.log(numbers[1])

//En los Objetos
//USAR REFERENCIAS
let alumno = {
    nombre: 'pepe',
    edad: 30
}

console.log(alumno.nombre)

let mascota = {
    tipo: 'mamifero',
    nombre: 'poly',
    edad: 4,
    comida: 'galletas',
    saludar: function(){
        console.log(`Hola de nuevo ${this.nombre}`)
    }
}

console.log(mascota.comida)

console.log(mascota['nombre'])

mascota.saludar()



//Formas de añadir propiedad
let comida = {
    tipo: 'Postre',
    nombre: 'Banana Split'
}

comida.precio = 120
comida['chef'] = 'Horacio'


//Forma de eliminar una propiedad

delete comida.nombre

console.log(comida)



//HOST
//Que estan dentro del navegador

console.log(window)

let fecha = new Date()

console.log(fecha)


