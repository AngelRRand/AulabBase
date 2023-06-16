let botonFormulario = document.getElementById('btn')

botonFormulario.onclick = (event) => {
    event.preventDefault()

    let nombre = document.getElementById('nombre')
    let email = document.getElementById('email')
    let carta = document.getElementById('carta')

    nombre.style.border = '1px solid green'
    email.style.border = '1px solid green'
    carta.style.border = '1px solid green'


    if(nombre.value.trim() === ''){
        nombre.style.border = '1px solid red'
    }

    let emainRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!emainRegex.test(email.value)){
        email.style.border = '1px solid red'

    }

    if(carta.value.trim() === ''){
        carta.style.border = '1px solid red'
    }

}