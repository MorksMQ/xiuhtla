// Inicialización de AOS
AOS.init({
    duration: 1000,
    offset: 200,
    once: true
});

// Scroll suave para enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        // Cierra el menú móvil y el overlay cuando se hace clic en un enlace
        document.querySelector('.navbar ul').classList.remove('show');
        document.querySelector('.overlay').classList.remove('show');
    });
});

// Alternar menú móvil y overlay
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.navbar ul').classList.toggle('show');
    document.querySelector('.overlay').classList.toggle('show');
});

// Cerrar el menú móvil al hacer clic en el overlay
document.querySelector('.overlay').addEventListener('click', function() {
    document.querySelector('.navbar ul').classList.remove('show');
    this.classList.remove('show');
});
