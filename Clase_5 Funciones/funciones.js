console.log('Veamos funciones')

function saludo(estudiante, femenino) {
    if (femenino === true) {
        console.log(`Hola soy la estudiante ${estudiante}`)
    } else {
        console.log(`Hola soy el estudiante ${estudiante}`)
    }
}

saludo('horacio', false)
saludo('veronica', true)
saludo('alex', false)

//Variable global
let contenedor = 'vaso'

function maquinaDeHacerZumo(ingrediente) {

    //Variable local

    let resultado = `${contenedor} de ${ingrediente}`

    //Return nos devuelve un resultado desde la funcion
    return resultado
}

console.log(maquinaDeHacerZumo('naranja'))
console.log(maquinaDeHacerZumo('BANANA'))
console.log(maquinaDeHacerZumo('HIGO'))


//Supongamos que somos un señor de seguridad de un hotel


/*

let nombre = horacio
let edad = 23
let nombre2 = veronica
let edad2 = 30

    if (edad >= 18) {
        alert('Hola de nuevo ' + nombre + ' tienes ' + edad)

    } else if (edad < 18) {
        alert('A la casa ' + nombre)
    }
    if (edad2 >= 18) {
        alert('Hola de nuevo ' + nombre2 + ' tienes ' + edad2)
    } else if (edad < 18) {
        alert('A la casa ' + nombre2)
    }

*/


function seguridad(nombre, edad) {
    if (edad >= 18) {
        return `pase adelante, ${nombre}`
    } else {
        return `no puede pasar, ${nombre}`
    }
}

console.log(seguridad('Horacio', 23))
//No le pasamos el parametro
console.log(seguridad('Veronica', 30))
//No tiene ningun parametro
console.log(seguridad('Pepe', 10))


/*
let ancho = 10
let alto = 15

let figura = ancho * alto
alert('El area de tu cuadrado es de: ' + figura + ' cm')

let ancho2 = 30
let alto2 = 25

let figura2 = ancho2 * alto2
alert('El area de tu cuadrado es de: ' + figura2 + ' cm')
*/

function areaCuadrado(ancho, alto) {

    let resultado = ancho * alto
    return resultado
}

let nuevasuma = areaCuadrado(10, 15)

console.log(nuevasuma + 150)


function areaCirculo(radio){
    let resultado = radio ** 2 * 3.14
    return resultado
}

for(let i = 1; i <=3; i++){
    console.log(`tu circulo de radio ${i} cm tiene de area: ${areaCirculo(i)} cm`) 
}
