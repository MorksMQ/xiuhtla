// Inicialización de AOS
AOS.init();

// Loader con efecto de desvanecimiento
window.addEventListener("load", function() {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");

    loader.classList.add("fade-out"); // Añade la clase de desvanecimiento
    setTimeout(() => {
        loader.style.display = "none"; // Oculta el loader después de la animación
        content.style.display = "block"; // Muestra el contenido
    }, 500); // Duración del desvanecimiento
});


AOS.init({
    duration: 1000, // Duración en milisegundos de la animación
    offset: 200,    // Offset en píxeles desde el punto de entrada
    once: true      // La animación se ejecutará solo una vez
});