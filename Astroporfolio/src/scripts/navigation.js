import { navigate } from 'astro:transitions/client';


const links = document.querySelectorAll('#nav-overlay a');
const overlay = document.getElementById('nav-overlay');

if (links.length && overlay) {
  links.forEach(link => {
    //Solo interceptar enlaces internos (de tu propio sitio)
    if (link.href.startsWith(window.location.origin)) {
      
      link.addEventListener('click', (e) => {
        //Prevenir la navegación inmediata
        e.preventDefault();
        
        const href = link.href;

        //Cerrar el overlay (la misma clase que usa 'menu.js')
        overlay.classList.add('-translate-y-full');

        //Esperar a que la animación de 500ms termine
        setTimeout(() => {
          //Navegar a la nueva página usando la API de Astro
          navigate(href);
        }, 500); // Esta duración debe coincidir con la de tu CSS
      });
    }
  });
}