// Obtener los elementos del carrusel
const carouselContainer = document.querySelector('.main_img_top');
const carouselImages = document.querySelectorAll('.main_img_top img');
const prevButton = document.querySelector('.circulo1');
const nextButton = document.querySelector('.circulo2');

let currentIndex = 0;
console.log(carouselImages)
function showImage() {
    carouselImages.forEach((image, index) => {
        if (index === currentIndex) {
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }
    });
}
// Función para ir a la imagen anterior
function goToPrevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = carouselImages.length - 1;
    }
    showImage();
}

// Función para ir a la siguiente imagen
function goToNextImage() {
    currentIndex++;
    if (currentIndex >= carouselImages.length) {
        currentIndex = 0;
    }
    showImage();
}

// Agregar event listeners a los botones
prevButton.addEventListener('click', goToPrevImage);
nextButton.addEventListener('click', goToNextImage);

// Mostrar la imagen inicial
showImage();