
function saluda () {
    console.log('Soy la funcion saludo')
}



let bienvenida = function(){
    console.log('Soy la funcion bienvenida')
}

let nuevaBienvenida = bienvenida
//console.log(saluda)
bienvenida()
nuevaBienvenida()
saluda()
//console.log(bienvenida)



function multiplicacion(a, b){
    return a * b
}

let multiplicacionDos = function(a, b) {
    return a * b
}

let multiplicacionTres = (a, b) => a * b 

console.log(multiplicacion(2, 5))      //Funcion

console.log(multiplicacionDos(10, 2))  //Funcion Expression

console.log(multiplicacionTres(15, 2)) //Arrow Funcion
