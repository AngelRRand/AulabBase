let num = prompt('numero igual a:')


//Number or String?
console.log(typeof num)
/*

if (num == 10) {
    console.log('Probando condicionales')
}  else {
    console.log('no es igual a 10')
}

*/

switch (num) {

    case '10':
        console.log('Es igual a 10')
        break;

    case '100':
        console.log('Es igual a 100')
        break;

    case '200':
        console.log('Es igual a 200')
        break;

    default:
        console.log('no es igual a 10')
        break;

}