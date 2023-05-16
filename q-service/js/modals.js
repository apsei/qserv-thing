var cards = document.querySelectorAll(".service-card");

var modals = document.querySelectorAll(".modal");

var spans = document.querySelectorAll(".close");

cards.forEach((card) => {
  card.addEventListener('click', function () {
    var category = this.getAttribute('data-category');
    modals.forEach((modal) => {
      if (modal.getAttribute('data-modal') === category) {
        modal.style.display = "block";
      }
    });
  });
});

spans.forEach((span) => {
  span.addEventListener('click', function () {
    modals.forEach((modal) => {
      if (window.getComputedStyle(modal).display === "block") {
        modal.style.display = "none";
      }
    });
  });
});

window.onclick = function (event) {
  modals.forEach((modal) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}
