let categories = [
    { name: 'Auto', icon: `<i class="fa-solid fa-car-rear"></i>`, count: 123 },
    { name: 'Elettronica', icon: `<i class="fa-solid fa-laptop"></i>`, count: 564 },
    { name: 'Moto', icon: `<i class="fa-solid fa-motorcycle"></i>`, count: 230 },
    { name: 'Abbigliamento', icon: `<i class="fa-solid fa-shirt"></i>`, count: 321 },
    { name: 'Sport', icon: `<i class="fa-solid fa-person-running"></i>`, count: 90 },
    { name: 'Giardinaggio', icon: `<i class="fa-solid fa-leaf"></i>`, count: 50 },
    { name: 'Casa', icon: `<i class="fa-solid fa-house-chimney"></i>`, count: 134 },
    { name: 'Cucina', icon: `<i class="fa-solid fa-fire-burner"></i>`, count: 176 },
]
let contenedorCategorias = document.querySelector('.main_lista_anuncios')


categories.forEach(element => {
    let article = document.createElement('article')

    article.classList.add('main_article')

    article.innerHTML = `
    <div class="icon_categoria">
        ${element.icon}
    </div>
    <h4>${element.name}</h4>
    <span>${element.count}</span>
`
contenedorCategorias.appendChild(article)
}); 