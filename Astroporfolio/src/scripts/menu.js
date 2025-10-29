const openBtn = document.getElementById('menu-open-btn');
const closeBtn = document.getElementById('menu-close-btn');
const overlay = document.getElementById('nav-overlay');

if (openBtn && closeBtn && overlay) {
    openBtn.addEventListener('click', () => {
        overlay.classList.remove('-translate-y-full'); // Muestra el menú
    });

    closeBtn.addEventListener('click', () => {
        overlay.classList.add('-translate-y-full'); // Oculta el menú
    });
}
