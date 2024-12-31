// Get elements
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');
const contactForm = document.getElementById('contactForm');

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

// Open modal
openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Close modal
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside the content
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Handle form submission
contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = {
    name: document.getElementById('formname').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    message: document.getElementById('message').value,
  };

  const response = await fetch('/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    alert('Email sent successfully!');
    modal.style.display = 'none';
    contactForm.reset();
  } else {
    alert('Failed to send email.');
  }
});


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
