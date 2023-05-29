document.addEventListener("DOMContentLoaded", function () {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
  }

  function updateCart() {
    let cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = "";

    let total = 0;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.forEach((service, index) => {
      let listItem = document.createElement("li");
      listItem.className = "cart-item";

      let icon = document.createElement("i");
      icon.className = service.icon;
      listItem.appendChild(icon);

      let text = document.createTextNode(`${service.name} - ${service.price}₽`);
      listItem.appendChild(text);

      let deleteButton = document.createElement("button");
      deleteButton.className = "delete-button";
      deleteButton.innerText = "Удалить";
      deleteButton.addEventListener('click', function () {
        removeFromCart(index);
      });
      listItem.appendChild(deleteButton);

      cartItemsContainer.appendChild(listItem);

      total += service.price;
    });

    document.querySelector('.total-price').textContent = `${total}₽`;
  }

  updateCart();

  document.getElementById("checkoutForm").addEventListener("submit", function() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let serviceIds = cart.map(service => service.id);
  let totalPrice = cart.reduce((total, service) => total + service.price, 0);
  document.getElementById("serviceId").value = serviceIds.join(",");
  document.getElementById("totalPrice").value = totalPrice;
});

  var modal = document.getElementById('checkoutModal');

  var btn = document.getElementsByClassName('checkout-button')[0];

  var span = document.getElementsByClassName('close')[0];

  btn.onclick = function() {
    modal.style.display = 'block';
  }

  span.onclick = function() {
    modal.style.display = 'none';
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }
});
