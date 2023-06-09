//1-Hacer un layout simple en el que haya 3 cards y cambiar a través de la manipulación del DOM el color del título de las mismas.
//Tu codigo aqui:





//2-Realizar un evento que al click de un botón que hayamos creado, nos parezca en consola un "Hola".
//Tu codigo aqui:







//3-Realizar unas cards que contengan cinco estrellas clicables para hacer una review.
//Tu codigo aqui:






//4-Crea una lista de opciones en el que el título venga del HTML y los elementos de la lista se realicen a través de la manipulación del DOM.
//Tu codigo aqui:






//5-Crea cuatro cards que representen un producto del mercado en el que se muestre:el nombre del producto, precio, nombre de la tienda, saber más. A través del DOM manipulation.
//Tu codigo aqui:

let contenedor = document.querySelector('main')

let productos = [
    {nombre: 'camisa', precio: 300, nombreTienda: 'max'},
    {nombre: 'remera', precio: 500, nombreTienda: 'max'},
    {nombre: 'chaleco', precio: 600, nombreTienda: 'max'},
    {nombre: 'pantalon', precio: 700, nombreTienda: 'max'},
    {nombre: 'corbata', precio: 800, nombreTienda: 'max'}
]

productos.forEach(element => {

    let producto = document.createElement('div')

    producto.classList.add('contenedor')
    
    producto.innerHTML = `
    <h4>${element.nombre}</h4>
    <p>${element.precio}</p>
    <p>${element.nombreTienda}</p>
    `

    contenedor.appendChild(producto)
});
