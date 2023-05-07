const servicesSlidesContainer = document.querySelector('.services-slides');
const servicesSlides = document.querySelectorAll('.services-slide');
let currentSlide = 0;

function changeSlide() {
  currentSlide++;

  if (currentSlide >= servicesSlides.length) {
    currentSlide = 0;
  }

  servicesSlidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(changeSlide, 5000); // Изменение слайдов каждые 5 секунд
