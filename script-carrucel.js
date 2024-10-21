let currentIndex = 0;

function updateButtons() {
    const totalImages = document.querySelectorAll('.carousel img').length;
    const leftButton = document.getElementById('leftBtn');
    const rightButton = document.getElementById('rightBtn');

    // Desactiva el botón izquierdo si estamos en la primera imagen
    if (currentIndex === 0) {
        leftButton.disabled = true;
    } else {
        leftButton.disabled = false;
    }

    // Desactiva el botón derecho si estamos en la última imagen
    if (currentIndex === totalImages - 1) {
        rightButton.disabled = true;
    } else {
        rightButton.disabled = false;
    }
}

function showSlide(index) {
    const totalImages = document.querySelectorAll('.carousel img').length;

    // Actualizar el índice de forma segura
    currentIndex = Math.min(Math.max(index, 0), totalImages - 1);

    // Actualizar el estado de los botones antes de mover el carrusel
    updateButtons();

    // Mover el carrusel
    const carousel = document.querySelector('.carousel');
    const translateX = -currentIndex * 100;
    carousel.style.transform = `translateX(${translateX}%)`;
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

// Iniciar el estado de los botones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    updateButtons();
});
