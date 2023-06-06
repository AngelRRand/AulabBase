let num = 0


//Siempre se ejecuta cuando su condicion sea TRUE
while (num < 10) {
    console.log(num)
    num++
}

//Este codigo jamas se ejecutaria
while (false) {
    console.log('HOLAAA')
    num++
}

let naranja = 1
do {
    console.log('naranja')
    naranja++
} while (naranja <= 10);


while (true) {
    let password = prompt('Ingrese su contraseña')
    if(password == '123'){
        console.log('Bienvenido')
        break
    }
    alert('Contraseña incorrecta')
}