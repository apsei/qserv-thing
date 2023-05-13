document.addEventListener("DOMContentLoaded", function () {
  let services = {
    "category1": [
      { "name": "Замена матрицы", "price": 5000, "icon": "fas fa-tools" },
      { "name": "Замена аккумулятора", "price": 4000, "icon": "fas fa-battery-half" },
      { "name": "Увеличение оперативной памяти", "price": 3000, "icon": "fas fa-memory" },
      { "name": "Замена жесткого диска", "price": 3500, "icon": "fas fa-hdd" },
      { "name": "Замена клавиатуры", "price": 2000, "icon": "fa fa-keyboard" },
      { "name": "Чистка от пыли", "price": 2000, "icon": "fa fa-screwdriver" }
    ],
    "category2": [
      { "name": "Замена блока питания", "price": 1500, "icon": "fas fa-plug" },
      { "name": "Замена видеокарты", "price": 1000, "icon": "fas fa-microchip" },
      { "name": "Установка оперативной памяти", "price": 500, "icon": "fas fa-memory" },
      { "name": "Чистка системы охлаждения", "price": 1000, "icon": "fas fa-fan" },
      { "name": "Установка операционной системы", "price": 1500, "icon": "fas fa-laptop-code" },
      { "name": "Устранение проблем с загрузкой", "price": 1000, "icon": "fas fa-tools" }
    ],
    "category3": [
      { "name": "Замена экрана", "price": 3000, "icon": "fas fa-mobile-alt" },
      { "name": "Замена аккумулятора", "price": 2000, "icon": "fas fa-battery-full" },
      { "name": "Замена кнопок", "price": 500, "icon": "fas fa-circle" },
      { "name": "Восстановление после залития", "price": 2000, "icon": "fas fa-tint" },
      { "name": "Замена корпуса", "price": 1500, "icon": "fas fa-mobile" },
      { "name": "Замена динамика", "price": 500, "icon": "fas fa-volume-up" }
    ],
    "category4": [
      { "name": "Замена экрана", "price": 4000, "icon": "fas fa-tablet-alt" },
      { "name": "Замена аккумулятора", "price": 2000, "icon": "fas fa-battery-half" },
      { "name": "Замена кнопок", "price": 500, "icon": "fas fa-circle" },
      { "name": "Восстановление после залития", "price": 2000, "icon": "fas fa-tint" },
      { "name": "Замена корпуса", "price": 1500, "icon": "fas fa-tablet" },
      { "name": "Замена динамика", "price": 500, "icon": "fas fa-volume-up" }
    ],
    "category5": [
      { "name": "Замена экрана на iPhone", "price": 5000, "icon": "fas fa-apple" },
      { "name": "Замена аккумулятора на iPhone", "price": 2000, "icon": "fas fa-battery-empty" },
      { "name": "Замена клавиатуры на MacBook", "price": 4000, "icon": "fas fa-keyboard" },
      { "name": "Замена аккумулятора на MacBook", "price": 5000, "icon": "fas fa-battery-three-quarters" },
      { "name": "Восстановление после залития iPhone", "price": 3000, "icon": "fas fa-tint" },
      { "name": "Восстановление после залития MacBook", "price": 4000, "icon": "fas fa-tint" }
    ],
    "category6": [
      { "name": "Установка дополнительной оперативной памяти", "price": 500, "icon": "fas fa-memory" },
      { "name": "Установка SSD", "price": 1000, "icon": "fas fa-hdd" },
      { "name": "Замена процессора", "price": 1500, "icon": "fas fa-microchip" },
      { "name": "Установка дополнительного жесткого диска", "price": 1000, "icon": "fas fa-hdd" },
      { "name": "Замена видеокарты", "price": 1000, "icon": "fas fa-bolt" },
      { "name": "Установка системы водяного охлаждения", "price": 3000, "icon": "fas fa-tint" }
    ],
    "category7": [
      { "name": "Установка операционной системы", "price": 1500, "icon": "fas fa-laptop-code" },
      { "name": "Установка офисных приложений", "price": 1000, "icon": "fas fa-file-word" },
      { "name": "Установка антивируса", "price": 800, "icon": "fas fa-shield-virus" },
      { "name": "Установка специализированного ПО", "price": 2000, "icon": "fas fa-cogs" },
      { "name": "Настройка почтового клиента", "price": 500, "icon": "fas fa-envelope" },
      { "name": "Установка и настройка браузера", "price": 500, "icon": "fas fa-globe-europe" }
    ],
    "category8": [
      { "name": "Восстановление данных с жесткого диска", "price": 3000, "icon": "fas fa-hdd" },
      { "name": "Восстановление данных с SSD", "price": 3500, "icon": "fas fa-hdd" },
      { "name": "Восстановление данных с флешки", "price": 2000, "icon": "fas fa-usb" },
      { "name": "Восстановление данных с карты памяти", "price": 2000, "icon": "fas fa-memory" },
      { "name": "Восстановление почты", "price": 2500, "icon": "fas fa-envelope" },
      { "name": "Восстановление удаленных файлов", "price": 2000, "icon": "fas fa-trash-restore" }
    ],
    "category9": [
      { "name": "Настройка Wi-Fi", "price": 2000, "icon": "fas fa-wifi" },
      { "name": "Настройка локальной сети", "price": 3000, "icon": "fas fa-network-wired" },
      { "name": "Настройка VPN", "price": 2500, "icon": "fas fa-user-secret" },
      { "name": "Настройка маршрутизатора", "price": 2000, "icon": "fas fa-route" },
      { "name": "Настройка файрвола", "price": 2000, "icon": "fas fa-shield-alt" },
      { "name": "Установка и настройка сетевого оборудования", "price": 3000, "icon": "fas fa-tools" }
    ],
    "category10": [
      { "name": "Удаление вирусов", "price": 2000, "icon": "fas fa-virus" },
      { "name": "Удаление троянов", "price": 2000, "icon": "fas fa-bug" },
      { "name": "Удаление руткитов", "price": 2500, "icon": "fas fa-sitemap" },
      { "name": "Удаление spyware и malware", "price": 2000, "icon": "fas fa-user-secret" },
      { "name": "Установка и обновление антивируса", "price": 1000, "icon": "fas fa-shield-virus" }
    ],
    "category11": [
      { "name": "Техническая поддержка на дому", "price": 2000, "icon": "fas fa-home" },
      { "name": "Техническая поддержка по телефону", "price": 1000, "icon": "fas fa-phone" },
      { "name": "Техническая поддержка через удаленный доступ", "price": 1500, "icon": "fas fa-desktop" },
      { "name": "Консультации по оборудованию", "price": 1000, "icon": "fas fa-headset" },
      { "name": "Консультации по программному обеспечению", "price": 1000, "icon": "fas fa-laptop-code" },
      { "name": "Уроки по работе с ПК", "price": 2000, "icon": "fas fa-user-graduate" }
    ],
    "category12": [
      { "name": "Обслуживание серверов Windows", "price": 4000, "icon": "fas fa-server" },
      { "name": "Обслуживание серверов Linux", "price": 4000, "icon": "fas fa-server" },
      { "name": "Настройка серверов баз данных", "price": 5000, "icon": "fas fa-database" },
      { "name": "Настройка и обслуживание серверов почты", "price": 3500, "icon": "fas fa-mail-bulk" },
      { "name": "Настройка и обслуживание веб-серверов", "price": 3500, "icon": "fas fa-globe-europe" },
      { "name": "Обслуживание серверов файлов", "price": 4000, "icon": "fas fa-folder" }
    ]
  };

  function addToCart(service) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(service);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  function updateServiceDetails(service, category) {
    let modal = document.querySelector(`.modal[data-modal=${category}]`);
    let title = modal.querySelector('.modal-service-title');
    let description = modal.querySelector('.modal-service-description');

    title.textContent = service.name;
    description.textContent = service.description;

    let addToCartButton = modal.querySelector('.add-to-cart');
    addToCartButton.setAttribute('data-service', JSON.stringify(service));
  }

  function updateServicesList(category) {
    let modal = document.querySelector(`.modal[data-modal=${category}]`);
    let list = modal.querySelector(".service-dropdown-list");
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
        updateServiceDetails(service, category);
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
      openModal(category);
    });
  });

  document.querySelectorAll('.close').forEach((button) => {
    button.addEventListener('click', function () {
      this.parentNode.parentNode.style.display = 'none';
    });
  });

  let toast = document.getElementById("toast");
  let toastTimeout;

  function showToast() {
    clearTimeout(toastTimeout);
    toast.classList.add("show");
    toastTimeout = setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }

  toast.addEventListener('mouseenter', function () {
    clearTimeout(toastTimeout);
  });

  toast.addEventListener('mouseleave', function () {
    toastTimeout = setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  });

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
      let service = JSON.parse(this.getAttribute('data-service'));
      addToCart(service);
      showToast();
    });
  });
});
