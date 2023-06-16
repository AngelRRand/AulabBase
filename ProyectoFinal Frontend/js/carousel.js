/* Seleccionar */

const carosuelContenedor = document.querySelector('.main_img_top')
const carosuelimagenes = document.querySelectorAll('.main_img_top img')
const btn1 = document.querySelector('.circulo1')
const btn2 = document.querySelector('.circulo2')

let index = 0
function enseñarImagen(){
    carosuelimagenes.forEach((img, i) => {
        if(i === index){
            img.classList.add('activo')
        }else{
            img.classList.remove('activo')
        }
    })
}

function irAtrasImagen(){
    index--
    if(index < 0){
        index = carosuelimagenes.length - 1;
    }
    enseñarImagen()
}

function irAdelanteImagen(){
    index++
    if(index >= carosuelimagenes.length){
        index = 0;
    }
    enseñarImagen()
}

btn1.addEventListener('click', irAdelanteImagen)
btn2.addEventListener('click', irAtrasImagen)

enseñarImagen()