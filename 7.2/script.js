$(document).ready(function(){
    let currentIndex = 0;
    const slides = $('.slider-box');
    const totalSlides = slides.length;

    
    function showSlide(index) {
        slides.removeClass('active');
        slides.eq(index).addClass('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    }

  
    $('#right-arrow').click(function(){
        nextSlide();
    });

    $('#left-arrow').click(function(){
        prevSlide();
    });

    
    showSlide(currentIndex);
});
