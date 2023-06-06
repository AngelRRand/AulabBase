//Mutator=========================================
//Nos devuelve un resultado que modifa el array original
//Mucho cuidado!!

//Iterator=========================================
//Metodos para hacer un recorrido en el array.


//Accesor=======================================
//Devouelve una copia del array original con el cambio hecho. Manteniendo el valor original del array




let array = ['horacio', 'bea', 'Ana']
let newArray = array

//Añade un elemento al final
array.push('veronica')


console.log(array)
console.log(newArray)


let nombre = 'Horacio'
let newNombre = nombre

nombre = 'Veronica'


console.log(nombre)
console.log(newNombre)


let array2 = ['gato', 'perro', 'loro', 'gato', 'perro', 'loro', 'caballo']
let newArray2 = array2

//Elimina un elemento al final
array2.pop()

console.log(array2)
console.log(newArray2)




let a = [1, 2]
let b = [3, 4]
let c = [5, 6]

//Junta dos o mas arrays en uno solo.
console.log(a.concat(b, c))

console.log(a)

console.log(b)


let listaAlumnos = ['Horacio', 'Vero', 'Bea', 'Nico', 'Paco', 'Pepe']

//Devuelve true o false si lo que buscamos esta dentro de nuestro array
console.log(listaAlumnos.includes('Nico'))



let paises = ['Venezuela', 'Argentina', 'Peru']

let newPaises = paises

console.log(newPaises)
//Devuelve el array en sentido contrario o invertido.
console.log(paises.reverse())



