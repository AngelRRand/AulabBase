let caja1 = document.getElementById('caja1')
let caja2 = document.getElementById('caja2')
let btn = document.getElementById('btn')
let contenedor = document.querySelector('main')

const usuarios = [
    {
        nombre: 'Horacio',
        edad: 23
    },
    {
        nombre: 'Maria',
        edad: 34
    },
    {
        nombre: 'Pepe',
        edad: 55
    },
    {
        nombre: 'Carola',
        edad: 19
    }
]


caja1.addEventListener('click', () => {
    console.log('evento click caja1')
})


caja2.onclick = () => {
    console.log('evento click caja2')
}




/* Pequeña practica */

btn.onclick = () => {
    cargarUsuarios()
}

function cargarUsuarios() {
    usuarios.forEach(element => {
        let usuario = document.createElement('div')
        usuario.classList.add('usuario')
        usuario.innerHTML = `
        <p>${element.nombre}</p>
        <p>Edad:<span>${element.edad}</span></p>
    `
    contenedor.appendChild(usuario)
    })

}