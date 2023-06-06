let array = [1, 2, 3, 4, 5]

let resultado = array.every(element => element > 0)

console.log(resultado)





let array2 = [1, 2, -3, 4, 5]

let resultado2 = array2.every(element => element > 0)

console.log(resultado2)





let array3 = ['horacio', 'pepe', 'paco']

let resultado3 = array3.every(element => typeof element === 'string')

console.log(resultado3)








//Map=================================================================

let numbers = [1, 2, 3, 4, 5, 6, 7 ,8 , 9]

let resultadoMap = numbers.map(n => n * 2)

console.log(resultadoMap)






//ForEach=============================================================


let numbers2 = [1, 2, 3, 4]

let resultadoForEach = numbers.forEach(n => console.log(n*2))

console.log(resultadoForEach)
