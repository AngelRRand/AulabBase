let path = 'https://rickandmortyapi.com/api/character'
let contenedor = document.querySelector('main')

fetch(path)
    .then(res => {
        return res.json()
    })
    .then(res => {
        let resultado = res.results

        resultado.forEach(character => {
            let carta = document.createElement('article')

            console.log(character)

            if(character.status === 'Dead'){
                carta.classList.add('dead')
            }else{
                carta.classList.add('alive')
            }

            carta.innerHTML = `
                <h4>${character.name}</h4>
                <img src=${character.image} alt="">
            `

            contenedor.appendChild(carta)
        })
    })