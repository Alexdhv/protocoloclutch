document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    let currentSlide = 0;
    let slideInterval;
    const slideDuration = 5000; // 5 segundos
    
    // Función para cambiar de slide
    function goToSlide(n) {
        slides[currentSlide].classList.remove('active');
        indicators[currentSlide].classList.remove('active');
        
        currentSlide = (n + slides.length) % slides.length;
        
        slides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');
    }
    
    // Función para el siguiente slide
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }
    
    // Función para el slide anterior
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }
    
    // Iniciar el carrusel automático
    function startCarousel() {
        slideInterval = setInterval(nextSlide, slideDuration);
    }
    
    // Detener el carrusel automático
    function stopCarousel() {
        clearInterval(slideInterval);
    }
    
    // Event listeners
    nextBtn.addEventListener('click', function() {
        stopCarousel();
        nextSlide();
        startCarousel();
    });
    
    prevBtn.addEventListener('click', function() {
        stopCarousel();
        prevSlide();
        startCarousel();
    });
    
    // Indicadores
    indicators.forEach(indicator => {
        indicator.addEventListener('click', function() {
            stopCarousel();
            const slideIndex = parseInt(this.getAttribute('data-slide'));
            goToSlide(slideIndex);
            startCarousel();
        });
    });
    
    // Pausar al pasar el ratón
    document.querySelector('.carousel-container').addEventListener('mouseenter', stopCarousel);
    document.querySelector('.carousel-container').addEventListener('mouseleave', startCarousel);
    
    // Iniciar
    startCarousel();
});