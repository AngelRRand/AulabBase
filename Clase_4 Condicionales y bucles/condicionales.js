
let num = 10

if(num == 10){
    console.log('Probando condicionales')
}else{
    console.log('no es igual a 10')
}


//Supongamos que tenemos que crear un codigo que revise el nombre del usuario sea alex
//Cantidad minima de caracteres que debe tener el nombre debe ser de 3
let nombre = prompt('Dinos tu nombre')

//console.log(nombre.length)

if(nombre.length > 3){
    console.log(`Buenos dias ${nombre}`)
}else{
    console.log(`Tu nombre debe tener por lo menos 3 caracteres`)
}


//Supongamos que tenemos que ver saldo de un usuario del banco y segun su saldo darle una categoria

//Platinum > 10000
//Gold > 1000
//Plata > 100
//Normal

let saldo = prompt(`Dinos tu saldo ${nombre}`)
let categoria

if(saldo > 10000){
    console.log(`Eres Platinum`)
    categoria = 'Platinum'
}else if(saldo > 1000){
    console.log(`Eres Gold`)
    categoria = 'Gold'
}else if(saldo > 100){
    console.log(`Eres Plata`)
    categoria = 'Plata'
}else{
    console.log(`Eres Miembro`)
    categoria = 'Normal'
}

//Por ultimo veamos que categoria tiene el usuario. Y apartir de eso darle un mensaje

if(categoria === 'Platinum'){


    let inversion = prompt(`En que va invertir hoy?`)

    if(inversion === 'Alquileres'){
        console.log('Tenemos promociones para ti...')
    }else if (inversion === 'Acciones'){
        console.log('Tenemos muchas mas promociones para ti...')
    }else {
        console.log(`Estamos felices de que inviertas en, ${inversion}`)
    }


}else{
    console.log('Que tenga buen dia')
}












