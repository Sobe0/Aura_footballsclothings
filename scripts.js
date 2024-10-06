// Dark/Light Theme Toggle
const toggleThemeBtn = document.getElementById('toggle-theme');
toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Testimonials Carousel Functionality
let sliderIndex = 0;
const slides = document.querySelectorAll('.testimonial-slide');

function showNextSlide() {
    sliderIndex = (sliderIndex + 1) % slides.length;
    document.querySelector('.testimonial-slider').style.transform = `translateX(-${sliderIndex * 100}%)`;
}

setInterval(showNextSlide, 3000);
