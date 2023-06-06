//Map devuelve un nuevo array

let numeros = [1, 2, 3, 4, 5, 6];

const numerosMultiplicados = numeros.map(num => num * num)

console.log(numerosMultiplicados) //[1, 4, 9, 16, 25, 36]


//ForEach no devuelve un nuevo array

const usuarios = [
    { nombre: 'horacio', edad: 23 },
    { nombre: 'maria', edad: 29 },
    { nombre: 'miguel', edad: 20 },
]

usuarios.forEach(usuario => console.log(usuario.nombre))



//Filter devuelve un nuevo array pero filtra segun la condicion especificada.



const productos = [
    { nombre: 'Iphone', precio: 3000 },
    { nombre: 'Ipad', precio: 500 },
    { nombre: 'MacBook', precio: 10000 },
    { nombre: 'iMac', precio: 800 }
]

const productosFiltrado = productos.filter(producto => {
    return producto.precio > 1000
})

console.log(productosFiltrado)

const alumnos = [
    { nombre: 'Paco', calificacion: 6 },
    { nombre: 'Alex', calificacion: 2 },
    { nombre: 'Pepe', calificacion: 10 },
    { nombre: 'Ana', calificacion: 8 }
]

const mejoresAlumnos = alumnos.filter(alumno => alumno.calificacion >= 8)

console.log(mejoresAlumnos)


//Reduce 

const edades = [10, 40, 20, 30]

const suma = edades.reduce((acumalador, edad) => {
    console.log(acumalador)
    return acumalador + edad
}, 0)

console.log(suma)

const productosReduce = [
    { nombre: 'Producto 1', precio: 20 },
    { nombre: 'Producto 2', precio: 50 },
    { nombre: 'Producto 3', precio: 80 },
    { nombre: 'Producto 4', precio: 100 }
]

const sumaProductos = productosReduce.reduce((acumalador, producto) => acumalador + producto.precio, 0)

console.log(sumaProductos)



