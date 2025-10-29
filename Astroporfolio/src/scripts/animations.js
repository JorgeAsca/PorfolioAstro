const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.1 // El elemento debe estar 10% visible para disparar
});

const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
elementsToAnimate.forEach(el => observer.observe(el));

