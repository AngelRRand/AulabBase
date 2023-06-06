let id = prompt('Dame el id del personaje')

let path = `https://rickandmortyapi.com/api/character/${id}`
let contenedor = document.querySelector('main')

fetch(path)
    .then(res => {
        return res.json()
    })
    .then(res => {
            let carta = document.createElement('article')
    
            carta.innerHTML = `
                <h2>${res.name}</h2>
                <p>status: <span>${res.status}</span></p>
                <p>gender: <span>${res.gender}</span></p>
                <img src=${res.image} alt="">
            `
    
            contenedor.appendChild(carta)
            
            console.log('No funciona')
    })