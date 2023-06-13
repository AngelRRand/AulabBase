let nav = document.querySelector('.nav')

window.addEventListener('scroll', () => {
    let posicion = window.scrollY
    if(posicion >= 62){
        nav.classList.add('navEvent')
    }else{
        nav.classList.remove('navEvent')
    }
})