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


let contenedor = document.querySelector('#contenedor')

usuarios.forEach(element => {
    //Nos permite crear elementos html
    let carta = document.createElement('article')

    carta.classList.add('card')
    carta.innerHTML = `
        <p>${element.nombre}</p>
        <p>Edad: <span>${element.edad}</span></p>
    `

    //Nos permite sumar elementos a nuestro contenedor "padre"
    contenedor.appendChild(carta)
})

