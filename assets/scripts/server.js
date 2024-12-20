const carousel = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let index = 0;

// Function to update the carousel position
function updateCarousel() {
    const width = images[0].clientWidth;
    carousel.style.transform = `translateX(${-index * width}px)`;
}

// Next button functionality
nextButton.addEventListener('click', () => {
    index = (index + 1) % images.length; // Loop back to the start
    updateCarousel();
});

// Previous button functionality
prevButton.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length; // Loop back to the end
    updateCarousel();
});

// Ensure the carousel resizes correctly
window.addEventListener('resize', updateCarousel);
