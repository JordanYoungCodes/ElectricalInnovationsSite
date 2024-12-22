// Select carousel elements
const carousel = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const descriptionText = document.getElementById('description-text');

// Image descriptions
const descriptions = [
  "This is our service van!",
  "This is a chandelier installation",
  "Complex mechanical installation",
  "We work well with people.",
  "Thera True lighting systems",
  "Thera True lighting installation",
  "Monroe Muffler remodle",
  "Aldi remodel",
  "Exterior lighting upgrades",
  "Residential Installation"
];

let index = 0; // Start with the first image

// Function to update the carousel position
function updateCarousel() {
  // Get the width of an image
  const width = images[0].clientWidth;

  // Update the position of the carousel
  carousel.style.transform = `translateX(${-index * width}px)`;

  // Update the description
  descriptionText.textContent = descriptions[index];
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

// Initialize the carousel and description on page load
window.addEventListener('load', updateCarousel);
