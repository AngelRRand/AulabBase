/* Contenedores */
let contenedorHome = document.querySelector('.anuncios_home')
let contenedorCompleto = document.querySelector('.anuncios_completo')

/* Eventos */
let btnFiltrar = document.getElementById('filtrarAnuncios')

/* Filtrados */
let contenedorSelector = document.getElementById('categoriasSelector')
let buscador = document.getElementById('buscadorAnuncios')
let maxprecio = document.getElementById('max')
let minprecio = document.getElementById('min')
let ordenar = document.getElementById('ordenar')


let cantidadAnuncios = anuncios.length


function renderizarAnuncios(matriz, contenedor, limite) {
    console.log(matriz, 'renderizarAnuncios')
    if (contenedor === null) {
        return
    }
    matriz.forEach((element, i) => {
        if (i <= limite) {
            let article = document.createElement('article')

            article.classList.add('contenedor_anuncio')
            let disponible = true
            if (i % 2 === 0) {
                disponible = false
            }
            article.innerHTML = `
            <img src="https://picsum.photos/560/340" alt="">
            <span class="anuncio_estado ${disponible === true ? 'disponible' : 'vendido'}">
                ${disponible === true ? 'disponible' : 'vendido'}
            </span>
            <div class="anuncio_texto">
                <span class="anuncio_precio">${element.price} $</span>
                <div class="anuncio_texto_top">
                    <h4>${element.name}</h4>
                    <span>${element.type}</span>
                </div>
                <div class="anuncio_texto_bottom">
                <span>
                      <i class="fa fa-tag"></i>
                      ${element.category}
                </span>
                <span>
                      <i class="fa fa-calendar-day"></i>
                      ${element.id}/06/2023
                </span>
                </div>
             </div>
            `

            contenedor.appendChild(article)
        }
    });
}

function renderizarCategorias() {

    /* let categorias = []
    anuncios.forEach(anuncio => {
        let categoria = anuncio.category

        if(!categorias.includes(categoria)){
            categorias.push(categoria)
        }
    })
    console.log(categorias) */

    let categorias = new Set();
    anuncios.forEach(anuncio => {
        let categoria = anuncio.category
        categorias.add(categoria)
    })

    categorias.forEach(categoria => {
        let option = document.createElement('option')
        option.innerHTML = categoria
        contenedorSelector.appendChild(option)
    })
}

function limpiarAnuncios(){
    let anuncios = document.querySelectorAll('article')
    anuncios.forEach(anuncio => {
        contenedorCompleto.removeChild(anuncio)
    })
}

function filtrarAnuncios() {

    let busquedaAnuncios = buscarAnuncio(anuncios)

    let categoriaAnuncios = categoriaAnuncio(busquedaAnuncios)

    let maxMinAnuncios = minMaxAnuncio(categoriaAnuncios)

    let anunciosOrdenados = ordenarAnuncio(maxMinAnuncios)

    limpiarAnuncios()
    
    renderizarAnuncios(anunciosOrdenados, contenedorCompleto, anunciosOrdenados.length)
}

function buscarAnuncio(matriz) {
    let busqueda = buscador.value.toLowerCase();
    let anunciosFiltrados = [];

    matriz.forEach(anuncio => {
        if (anuncio.name.toLowerCase().includes(busqueda)) {
            anunciosFiltrados.push(anuncio)
        }
    })
    return anunciosFiltrados
}

function categoriaAnuncio(matriz) {
    let categoriaSeleccionada = contenedorSelector.value

    let anunciosFiltrados = matriz.filter(anuncio => {
        return anuncio.category === categoriaSeleccionada || categoriaSeleccionada === 'Todos'
    })

    return anunciosFiltrados
}

function minMaxAnuncio(matriz) {
    let min = Number(minprecio.value)
    let max = maxprecio.value == '' ? Infinity : Number(maxprecio.value)

    let anunciosFiltrados = matriz.filter(anuncio => {
        return Number(anuncio.price) >= min && Number(anuncio.price) <= max
    })

    return anunciosFiltrados
}

function ordenarAnuncio(matriz) {
    let tipoDeOrden = ordenar.value
    switch (tipoDeOrden) {
        case 'Mas reciente':
            matriz = matriz.sort((a, b) => a.id - b.id)
            return matriz
        case 'Mas antiguo':
            matriz = matriz.sort((a, b) => b.id - a.id)
            return matriz

        case 'Mayor costo':
            matriz = matriz.sort((a, b) => b.price - a.price)
            return matriz

        case 'Menor costo':
            matriz = matriz.sort((a, b) => a.price - b.price)
            return matriz

        case 'A - Z':
            matriz = matriz.sort((a, b) => {
                let nombreA = a.name.toUpperCase();
                let nombreB = b.name.toUpperCase();

                if (nombreA < nombreB) {
                    return -1
                }
                if (nombreA > nombreB) {
                    return 1
                }
                return 0
            })
            return matriz
        case 'Z- A':
            matriz = matriz.sort((a, b) => {
                let nombreA = a.name.toUpperCase();
                let nombreB = b.name.toUpperCase();

                if (nombreA < nombreB) {
                    return 1
                }
                if (nombreA > nombreB) {
                    return -1
                }
                return 0
            })
            return matriz
        default:
            return matriz
    }
}


renderizarAnuncios(anuncios, contenedorHome, 5)
renderizarAnuncios(anuncios, contenedorCompleto, cantidadAnuncios)
renderizarCategorias()

btnFiltrar.addEventListener('click', filtrarAnuncios)
