//Bucle for
/*
for(desde; hasta; actualizacion){

}

*/


//For inicia en 0
//For se ejecuta siempre que sea menor a 15 o igual a 15
//Cada vez que se ejecuta suma 1 a i
for(let i = 1; i <= 3; i++){
    console.log('Probando los bucles!')
}

/*
//Primer vuelta
i = 0
i = i + 1
//Segunda Vuelta
i = 1
i = i + 1
//Tercera vuelta
i = 2
continua...
*/

//Vamos a hacer un programa que nos de la tabla de mulplicar del numero ingresado

let numero = prompt('¿que tabla te gustaria saber?');
for(let i = 0; i <= 10; i++){
    let resultado = numero * i
    console.log(`${numero} x ${i} = ${resultado}`)
}

//Queremos mostrar en consola todos los numeros del 0 al 20, menos el numero 10.

for(let i = 0; i <= 20; i++){
    if(i === 10){
        continue;
    }
    console.log(i)
}



