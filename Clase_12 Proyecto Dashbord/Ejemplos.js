/* .THEN */


fetch('https://randomuser.me/api/?results=30')
    .then(res => res.json())
    .then(res => {
        let resultado = res.results
        let nuevoArray = resultado.map(usuario => {
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
    })



/* ASYNC AWAIT */

async function getUsers() {
    const response = await fetch('https://randomuser.me/api/?results=30')
    const data = await response.json()
    let resultado = data.results
    resultado.forEach(usuario => {

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
