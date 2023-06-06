let contenedorUsuarios = document.getElementById('contenedorUsuarios')
let btnFiltrado = document.querySelector('#btnFiltrar')
let usuarios = []

function optenerUsuarios(){
    fetch('https://randomuser.me/api/?results=20')
        .then(result => result.json())
        .then(result => {
            usuarios = result.results
            renderizarUsuarios(usuarios)
        })
}

function renderizarUsuarios(usuariosRenderizar){
    usuariosRenderizar.forEach(element => {
        let usuario = document.createElement('article')
        let nombreCompleto = `${element.name.title} ${element.name.first} ${element.name.last}`
        usuario.innerHTML = `
        <h2>${nombreCompleto}</h2>
        <img src=${element.picture.large} alt="">
            <p>Nacionalidad: ${element.location.country
            }</p>
            <p>Edad: ${element.dob.age}</p>
            <p>Genero: ${element.gender}</p>
        `
        contenedorUsuarios.appendChild(usuario)
    })
}


function filtrarSoloHombre() {
    let usuariosFiltrados = usuarios
    
    usuariosFiltrados = usuarios.filter(element => element.gender === 'male')

    limpiarUsuarios()

    renderizarUsuarios(usuariosFiltrados)
}

function limpiarUsuarios() {
    let listaUsuarios = document.querySelectorAll('article')
    listaUsuarios.forEach(element => {
        contenedorUsuarios.removeChild(element)
    })
}

btnFiltrado.onclick = () => {
    filtrarSoloHombre()
}

optenerUsuarios()