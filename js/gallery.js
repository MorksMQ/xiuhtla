function filterGallery(place) {
    const items = document.querySelectorAll('.gallery-item');

    items.forEach(item => {
        if (item.classList.contains(place)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

// Función para mostrar todas las imágenes
function showAll() {
    const items = document.querySelectorAll('.gallery-item');
    
    items.forEach(item => {
        item.classList.remove('hidden');
    });
}