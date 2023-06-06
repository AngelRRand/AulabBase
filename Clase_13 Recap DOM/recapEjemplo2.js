let select = document.querySelector('#selector')
let contenedor = document.querySelector('.contenedorTexto')

select.addEventListener('change', ()=>{
    if(select.value !== 'default'){
        let saludo = document.createElement('h4')
        saludo.textContent = `Hola buenos dias ${select.value}`
        contenedor.appendChild(saludo)
    }
})

