//1_Te dan el length y el width de un polígono de 4 lados. El polígono puede ser un rectángulo o un cuadrado. Si es un cuadrado, devuelve su área. Si es un rectángulo, devuelve su perímetro.
//Para este ejercicio debes asumir que es un cuadrado, de lo contrario, es un rectángulo.
//Tu codigo aqui:













//2_Escribir una función que calcule el área del radio del 1 al 10.
//Tu codigo aqui:














//3_Encuentra la forma más rápido de convertir la primera letra de una cadena en mayúscula a través de una función.
//Ejemplo: capitalize('simon') Simon
//Tu codigo aqui:


function capitalize(palabra){
    let nuevaPalabra = []
    for (let index = 0; index < palabra.length; index++) {
        if(index === 0){
            nuevaPalabra.push(palabra[index].toUpperCase())
        }else{
            nuevaPalabra.push(palabra[index])
        }
    }
    return nuevaPalabra
}

console.log(capitalize('simon').join(''))