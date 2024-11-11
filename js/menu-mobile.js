// Alternar el menú móvil y el fondo oscuro (overlay)
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.navbar ul').classList.toggle('show');
    document.querySelector('.overlay').classList.toggle('show');
});

// Cerrar el menú móvil al hacer clic en el overlay
document.querySelector('.overlay').addEventListener('click', function() {
    document.querySelector('.navbar ul').classList.remove('show');
    this.classList.remove('show');
});

// Cerrar el menú móvil al hacer clic en cualquier enlace dentro del menú
document.querySelectorAll('.navbar ul li a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.navbar ul').classList.remove('show');
        document.querySelector('.overlay').classList.remove('show');
    });
});
