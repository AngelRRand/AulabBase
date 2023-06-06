/******* Selectores *******/  

let cuadrado = document.querySelector('.cuadrado')
let btnCuadrado = document.getElementById('cuadradoBtn')
let btnCuadradoAnimacion = document.getElementById('cuadradoBtnAnimation')



btnCuadrado.addEventListener('click', () => {
    cuadrado.style.backgroundColor = `rgb(${colorRandom()}, ${colorRandom()}, ${colorRandom()})`


    function colorRandom (){
        return Math.floor(Math.random() * (255 - 0) + 0)
    }
})


btnCuadradoAnimacion.onclick = () => {
    cuadrado.classList.add('animationBg')
}





















