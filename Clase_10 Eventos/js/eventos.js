
//*************************Click ***************************/
let cuadrado = document.querySelector('.card')
let contenedor = document.querySelector('body')
let cambio = true


cuadrado.addEventListener('click', () => {
    if (cambio = true) {
        cuadrado.style.backgroundColor = 'blue'
    } else {
        console.log('no ejecutar')
    }
})

contenedor.addEventListener('click', () => {
    if (cambio === true) {
        cambio = false
    } else {
        cuadrado.style.backgroundColor = 'crimson'
        cambio = true
    }
})


//************************* mouse ***************************/


let cuadrado2 = document.querySelector('.card2')

cuadrado2.addEventListener('mouseover', () => {
    cuadrado2.style.backgroundColor = 'blue'
})

cuadrado2.addEventListener('mouseout', () => {
    cuadrado2.style.backgroundColor = 'rgb(20, 220, 153)'
})
cuadrado2.addEventListener('mousemove', () => {
    console.log('Soy el move')
})


//************************* scroll ***************************/


let contenido = document.querySelector('main')


window.addEventListener('scroll', () => {
    let posicion = window.scrollY
    if (posicion < 200) {
        console.log('este es el inicio')
        contenido.style.backgroundColor = 'black'

    } else if (posicion >= 200 && posicion < 600) {
        console.log('esta es la mitad')
        contenido.style.backgroundColor = 'grey'
        contenido.classList.remove('animationBg')
    } else {
        console.log('este es el final')
        contenido.classList.add('animationBg')
    }
})

console.log(contenedor, 'a')