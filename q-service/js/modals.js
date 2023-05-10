// getting service cards
var cards = document.querySelectorAll(".service-card");

// getting modals
var modals = document.querySelectorAll(".modal");

// getting closing spans
var spans = document.querySelectorAll(".close");

// modal show when click on window
cards.forEach((card) => {
    card.addEventListener('click', function() {
        var category = this.getAttribute('data-category');
        modals.forEach((modal) => {
            if(modal.getAttribute('data-modal') === category) {
                modal.style.display = "block";
            }
        });
    });
});

// window close when x clicked
spans.forEach((span) => {
    span.addEventListener('click', function() {
        modals.forEach((modal) => {
            if(window.getComputedStyle(modal).display === "block") {
                modal.style.display = "none";
            }
        });
    });
});

// window close if click somewhere besides
window.onclick = function(event) {
    modals.forEach((modal) => {
        if(event.target == modal) {
            modal.style.display = "none";
        }
    });
}
