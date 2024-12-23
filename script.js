const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
        const nextButton = document.getElementById('next');
        const prevButton = document.getElementById('prev');

        let currentSlide = 0;

        nextButton.addEventListener('click', () => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        });

        prevButton.addEventListener('click', () => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
        });