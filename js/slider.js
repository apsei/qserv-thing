let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

document.querySelector(".prev-slide").addEventListener("click", () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  updateSlides();
});

document.querySelector(".next-slide").addEventListener("click", () => {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  updateSlides();
});

function updateSlides() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}

document.querySelectorAll('.stars').forEach(stars => {
    const rating = stars.getAttribute('data-rating');
    for (let i = 0; i < rating; i++) {
      stars.children[i].classList.add('full');
    }
  });