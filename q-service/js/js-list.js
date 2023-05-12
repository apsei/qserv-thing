let services = {
  "category1": [
      { "name": "Замена матрицы", "price": 5000, "icon": "fas fa-tools" },
      { "name": "Замена аккумулятора", "price": 4000, "icon": "fas fa-battery-half" },
      { "name": "Увеличение оперативной памяти", "price": 3000, "icon": "fas fa-memory" },
      { "name": "Замена жесткого диска", "price": 3500, "icon": "fas fa-hdd" },
      { "name": "Замена клавиатуры", "price": 2000, "icon": "fa fa-keyboard" },
      { "name": "Чистка от пыли", "price": 2000, "icon": "fa fa-screwdriver" }
  ],
  //... добавить остальные категории
};

function updateServiceDetails(service) {
  let title = document.querySelector(".modal-service-title");
  let description = document.querySelector(".modal-service-description");
  title.innerText = service.name;
  description.innerText = `Стоимость услуги: ${service.price}₽`;
}

function updateServicesList(category) {
  let list = document.querySelector(".service-dropdown-list");
  list.innerHTML = ""; 

  services[category].forEach((service, index) => {
      let listItem = document.createElement("li");
      listItem.className = "service-dropdown-item";

      let icon = document.createElement("i");
      icon.className = service.icon;
      listItem.appendChild(icon);

      let text = document.createTextNode(`${service.name} - ${service.price}₽`);
      listItem.appendChild(text);

      let button = document.createElement("button");
      button.className = "detail-button";
      button.innerText = "Подробнее";
      listItem.appendChild(button);

      button.addEventListener('click', function () {
          updateServiceDetails(service);
      });

      list.appendChild(listItem);

      setTimeout(() => {
        listItem.style.opacity = "1";
    }, index * 50);
  });
}

var cards = document.querySelectorAll(".service-card");

cards.forEach((card) => {
  card.addEventListener('click', function () {
      let category = this.getAttribute('data-category');
      updateServicesList(category);
  });
});
