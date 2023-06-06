let contenedorUsuarios = document.querySelector('.contenedorCards')
let filtradoEdad = document.getElementById('filtradoEdad')
let filtraGenero = document.getElementById('filtradoGenero')
let input = document.getElementById('buscador')
let btnInput = document.getElementById('btnBuscador')
let usuarios = []

async function getUsers() {
    const response = await fetch('https://randomuser.me/api/?results=200')
    const data = await response.json()
    usuarios = data.results
    renderizarUsuarios(data.results)
}

function renderizarUsuarios (usuarios) {
    usuarios.forEach(usuario => {
        let cartaUsuario = document.createElement('article')
        cartaUsuario.innerHTML = `
                <img src=${usuario.picture.large} alt="usuario">
                <div class="infoUser">
                    <h4>
                        <span>${usuario.name.title}</span>
                        <span>${usuario.name.first}</span>
                        <span>${usuario.name.last}</span>
                    </h4>
                    <div>
                        <p>${usuario.dob.age}</p>
                        <p>${usuario.gender}</p>
                    </div>
                </div>
            `
        contenedorUsuarios.appendChild(cartaUsuario)
    })
}

/* Filtrados */
function filtarUsuariosEdad () {
    let edadSeleccionada = filtradoEdad.value
    let usuariosFiltrados = usuarios

    if(edadSeleccionada !== 'default'){
        let minMax = edadSeleccionada.split('-')
        usuariosFiltrados = usuarios.filter(usuario =>{
            return usuario.dob.age >= minMax[0] && usuario.dob.age <= minMax[1]
        })
    }
    limpiarUsuarios()
    renderizarUsuarios(usuariosFiltrados)
}

function filtarUsuariosGenero () {
    let generoSeleccionado = filtraGenero.value
    let usuariosFiltrados = usuarios

    if(generoSeleccionado !== 'default'){
        usuariosFiltrados = usuarios.filter(usuario =>{
            return usuario.gender === generoSeleccionado
        })
    }
    limpiarUsuarios()
    renderizarUsuarios(usuariosFiltrados)
}

function buscador(){
    let nombreBuscado = input.value
    let usuariosFiltrados = usuarios
    if(nombreBuscado !== ''){
        usuariosFiltrados = usuarios.filter(usuario => {
            return usuario.name.first.toLowerCase().includes(nombreBuscado.toLowerCase())
        })
    }
    limpiarUsuarios()
    renderizarUsuarios(usuariosFiltrados)
}


function limpiarUsuarios(){
    let todosLosUsuarios = document.querySelectorAll('article')
    todosLosUsuarios.forEach(usuario => {
        contenedorUsuarios.removeChild(usuario)
    })
}

filtradoEdad.addEventListener('change', filtarUsuariosEdad)
filtraGenero.addEventListener('change', filtarUsuariosGenero)
btnInput.addEventListener('click', buscador)


getUsers()

