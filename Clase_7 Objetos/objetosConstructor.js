/*
let producto = {
    nombre: 'Super Taza',
    precio: 20,
    tipo: 'taza'
}
let producto2 = {
    nombre: 'Muñeca Barby',
    precio: 200,
    tipo: 'juguete'
}
*/

function producto(nombre, precio, tipo, iva){
    this.nombre = nombre;
    this.precio = precio;
    this.tipo = tipo;
    this.iva =  iva;
    this.total = function(){
        console.log(`${this.nombre} tiene un valor de ${this.precio * this.iva}`)
    }
}

let producto01 = new producto('Super Taza', 20, 'taza', 5)
//let producto02 = new producto('Muñeca Barby', 200, 'juguete')

producto01.total()

console.log(producto01)
//console.log(producto02)


