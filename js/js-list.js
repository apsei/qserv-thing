document.addEventListener("DOMContentLoaded", function () {
  let services = {
    "category1": [
      { "id": 1, "name": "Замена матрицы", "price": 5000, "icon": "fas fa-tools", "description": "Профессиональная замена матрицы ноутбука с гарантией качества. Все работы проводятся нашими опытными мастерами." },
      { "id": 2, "name": "Замена аккумулятора", "price": 4000, "icon": "fas fa-battery-half", "description": "Замена аккумулятора в вашем ноутбуке на новый. Повысьте продолжительность работы от батареи." },
      { "id": 3, "name": "Увеличение оперативной памяти", "price": 3000, "icon": "fas fa-memory", "description": "Увеличьте производительность вашего ноутбука с помощью увеличения оперативной памяти. Наши специалисты предоставят качественный сервис." },
      { "id": 4, "name": "Замена жесткого диска", "price": 3500, "icon": "fas fa-hdd", "description": "Если ваш жесткий диск не работает, мы поможем его заменить и восстановить данные, если это возможно." },
      { "id": 5, "name": "Замена клавиатуры", "price": 2000, "icon": "fa fa-keyboard", "description": "Замена клавиатуры в ноутбуке. Быстро, качественно и с гарантией." },
      { "id": 6, "name": "Чистка от пыли", "price": 2000, "icon": "fa fa-screwdriver", "descripton": "Регулярная чистка ноутбука от пыли - залог его долгой и стабильной работы. Наши специалисты проведут эту процедуру быстро и качественно." }
    ],
    "category2": [
      { "id": 7, "name": "Замена блока питания", "price": 1500, "icon": "fas fa-plug", "description": "Если ваш компьютер не включается, проблема может быть в блоке питания. Наши специалисты могут быстро и эффективно заменить его." },
      { "id": 8, "name": "Замена видеокарты", "price": 1000, "icon": "fas fa-microchip", "description": "Улучшите графическую производительность вашего ПК с нашей услугой замены видеокарты." },
      { "id": 9, "name": "Установка оперативной памяти", "price": 500, "icon": "fas fa-memory", "description": "Увеличьте скорость и производительность вашего компьютера с помощью установки дополнительной оперативной памяти." },
      { "id": 10, "name": "Чистка системы охлаждения", "price": 1000, "icon": "fas fa-fan", "description": "Предотвратите перегрев и продлите срок службы вашего ПК с нашей услугой чистки системы охлаждения." },
      { "id": 11, "name": "Установка операционной системы", "price": 1500, "icon": "fas fa-laptop-code", "description": "Нужна новая операционная система или хотите обновиться до последней версии? Мы поможем вам с установкой." },
      { "id": 12, "name": "Устранение проблем с загрузкой", "price": 1000, "icon": "fas fa-tools", "description": "Если у вас возникли проблемы с загрузкой вашего компьютера, наши специалисты помогут вам их решить." }
    ],
    "category3": [
      { "id": 13, "name": "Замена экрана", "price": 3000, "icon": "fas fa-mobile-alt", "description": "Если ваш экран разбит или не работает правильно, наши специалисты быстро и аккуратно заменят его." },
      { "id": 14, "name": "Замена аккумулятора", "price": 2000, "icon": "fas fa-battery-full", "description": "Если ваше устройство быстро разряжается или не заряжается, это может быть проблема аккумулятора. Мы можем его заменить." },
      { "id": 15, "name": "Замена кнопок", "price": 500, "icon": "fas fa-circle", "description": "Если кнопки на вашем устройстве не реагируют или застревают, мы можем помочь вам с этим." },
      { "id": 16, "name": "Восстановление после залития", "price": 2000, "icon": "fas fa-tint", "description": "Если ваше устройство попало под дождь или упало в воду, мы можем помочь восстановить его работоспособность." },
      { "id": 17, "name": "Замена корпуса", "price": 1500, "icon": "fas fa-mobile", "description": "Если корпус вашего устройства поврежден, мы можем заменить его, чтобы оно выглядело как новое." },
      { "id": 18, "name": "Замена динамика", "price": 500, "icon": "fas fa-volume-up", "description": "Если звук на вашем устройстве искажен или отсутствует, мы можем помочь заменить динамик." }
    ],
    "category4": [
      { "id": 19, "name": "Замена экрана", "price": 4000, "icon": "fas fa-tablet-alt", "description": "Если ваш экран разбит или не работает правильно, наши специалисты быстро и аккуратно заменят его." },
      { "id": 20, "name": "Замена аккумулятора", "price": 2000, "icon": "fas fa-battery-half", "description": "Если ваше устройство быстро разряжается или не заряжается, это может быть проблема аккумулятора. Мы можем его заменить." },
      { "id": 21, "name": "Замена кнопок", "price": 500, "icon": "fas fa-circle", "description": "Если кнопки на вашем устройстве не реагируют или застревают, мы можем помочь вам с этим." },
      { "id": 22, "name": "Восстановление после залития", "price": 2000, "icon": "fas fa-tint", "description": "Если ваше устройство попало под дождь или упало в воду, мы можем помочь восстановить." },
      { "id": 23, "name": "Замена корпуса", "price": 1500, "icon": "fas fa-tablet", "description": "Если корпус вашего устройства поврежден, мы можем заменить его, чтобы оно выглядело как новое." },
      { "id": 24, "name": "Замена динамика", "price": 500, "icon": "fas fa-volume-up", "description": "Если звук на вашем устройстве искажен или отсутствует, мы можем помочь заменить динамик." }
    ],
    "category5": [
      { "id": 25, "name": "Замена экрана на iPhone", "price": 5000, "icon": "fas fa-apple", "description": "Если ваш iPhone упал и экран разбился, наши специалисты заменят его на новый." },
      { "id": 26, "name": "Замена аккумулятора на iPhone", "price": 2000, "icon": "fas fa-battery-empty", "description": "Если заряд вашего iPhone быстро иссякает, мы заменим аккумулятор на новый." },
      { "id": 27, "name": "Замена клавиатуры на MacBook", "price": 4000, "icon": "fas fa-keyboard", "description": "Если клавиши на вашем MacBook не работают или застревают, наши специалисты могут заменить клавиатуру." },
      { "id": 28, "name": "Замена аккумулятора на MacBook", "price": 5000, "icon": "fas fa-battery-three-quarters", "description": "Если ваш MacBook быстро разряжается или не заряжается вообще, наши специалисты могут заменить аккумулятор на новый." },
      { "id": 29, "name": "Восстановление после залития iPhone", "price": 3000, "icon": "fas fa-tint", "description": "Если ваш iPhone попал в воду, наши специалисты могут провести восстановительные работы, чтобы вернуть его к жизни." },
      { "id": 30, "name": "Восстановление после залития MacBook", "price": 4000, "icon": "fas fa-tint", "description": "Если ваш MacBook был залит жидкостью, наши специалисты могут провести восстановительные работы, чтобы спасти вашу технику." }
    ],
    "category6": [
      { "id": 31, "name": "Установка дополнительной оперативной памяти", "price": 500, "icon": "fas fa-memory", "description": "Если ваш ПК работает медленно, установка дополнительной оперативной памяти может увеличить его производительность." },
      { "id": 32, "name": "Установка SSD", "price": 1000, "icon": "fas fa-hdd", "description": "Установка SSD может значительно ускорить работу вашего ПК, уменьшив время загрузки и увеличив скорость обработки данных." },
      { "id": 33, "name": "Замена процессора", "price": 1500, "icon": "fas fa-microchip", "description": "Если ваш компьютер не справляется с нагрузкой, замена процессора может улучшить его производительность." },
      { "id": 34, "name": "Установка дополнительного жесткого диска", "price": 1000, "icon": "fas fa-hdd", "description": "Установка дополнительного жесткого диска увеличит общий объем хранения данных на вашем ПК." },
      { "id": 35, "name": "Замена видеокарты", "price": 1000, "icon": "fas fa-bolt", "description": "Замена видеокарты может улучшить графическую производительность вашего ПК, особенно при играх и обработке видео." },
      { "id": 36, "name": "Установка системы водяного охлаждения", "price": 3000, "icon": "fas fa-tint", "description": "Система водяного охлаждения может помочь управлять теплом, генерируемым вашим ПК, что особенно важно для высокопроизводительных систем." }
    ],
    "category7": [
      { "id": 37, "name": "Установка операционной системы", "price": 1500, "icon": "fas fa-laptop-code", "description": "Наши специалисты могут установить или переустановить операционную систему на вашем компьютере, чтобы он работал эффективно и безопасно." },
      { "id": 38, "name": "Установка офисных приложений", "price": 1000, "icon": "fas fa-file-word", "description": "Мы можем установить офисные приложения, такие как Microsoft Office или Google Workspace, чтобы вы могли эффективно работать с документами." },
      { "id": 39, "name": "Установка антивируса", "price": 800, "icon": "fas fa-shield-virus", "description": "Установка надежного антивируса поможет защитить ваш компьютер от вирусов, троянов и других угроз." },
      { "id": 40, "name": "Установка специализированного ПО", "price": 2000, "icon": "fas fa-cogs", "description": "Наши специалисты могут установить любое специализированное программное обеспечение, которое вам может понадобиться для работы или учебы." },
      { "id": 41, "name": "Настройка почтового клиента", "price": 500, "icon": "fas fa-envelope", "description": "Мы можем настроить почтовый клиент, такой как Outlook или Thunderbird, для эффективной работы с электронной почтой." },
      { "id": 42, "name": "Установка и настройка браузера", "price": 500, "icon": "fas fa-globe-europe", "description": "Мы можем установить и настроить браузер для безопасного и эффективного серфинга в Интернете." }
    ],
    "category8": [
      { "id": 43, "name": "Восстановление данных с жесткого диска", "price": 3000, "icon": "fas fa-hdd", "description": "Наш сервис специализируется на восстановлении потерянных данных с жесткого диска, включая удаленные файлы, поврежденные разделы и другие проблемы." },
      { "id": 44, "name": "Восстановление данных с SSD", "price": 3500, "icon": "fas fa-hdd", "description": "Мы можем восстановить потерянные данные с SSD, включая удаленные файлы, поврежденные ячейки памяти и другие проблемы." },
      { "id": 45, "name": "Восстановление данных с флешки", "price": 2000, "icon": "fas fa-usb", "description": "Наши специалисты могут восстановить потерянные файлы с вашего USB-накопителя, даже если он был поврежден или отформатирован." },
      { "id": 46, "name": "Восстановление данных с карты памяти", "price": 2000, "icon": "fas fa-memory", "description": "Мы специализируемся на восстановлении данных с карт памяти, включая SD, CF, xD и другие форматы." },
      { "id": 47, "name": "Восстановление почты", "price": 2500, "icon": "fas fa-envelope", "description": "Если вы случайно удалили важные сообщения или столкнулись с проблемами с почтовым ящиком, мы можем помочь восстановить вашу электронную почту." },
      { "id": 48, "name": "Восстановление удаленных файлов", "price": 2000, "icon": "fas fa-trash-restore", "description": "Если вы случайно удалили важные файлы, наши специалисты могут помочь восстановить их с вашего жесткого диска, SSD, USB-накопителя или карты памяти." }
    ],
    "category9": [
      { "id": 49, "name": "Настройка Wi-Fi", "price": 2000, "icon": "fas fa-wifi", "description": "Мы можем помочь настроить ваш домашний или офисный Wi-Fi для оптимальной производительности и безопасности." },
      { "id": 50, "name": "Настройка локальной сети", "price": 3000, "icon": "fas fa-network-wired", "description": "Наши специалисты могут настроить вашу локальную сеть, обеспечивая быстрый и надежный доступ к интернету и сетевым ресурсам." },
      { "id": 51, "name": "Настройка VPN", "price": 2500, "icon": "fas fa-user-secret", "description": "Мы можем настроить VPN для безопасного и анонимного доступа к Интернету или для удаленного доступа к сетевым ресурсам." },
      { "id": 52, "name": "Настройка маршрутизатора", "price": 2000, "icon": "fas fa-route", "description": "Наш сервис может настроить ваш маршрутизатор для оптимальной производительности и безопасности, включая настройку Wi-Fi, VPN, файрвола и других функций." },
      { "id": 53, "name": "Настройка файрвола", "price": 2000, "icon": "fas fa-shield-alt", "description": "Мы предлагаем услуги по настройке файрвола для обеспечения безопасности вашей домашней или офисной сети от нежелательного внешнего доступа." },
      { "id": 54, "name": "Установка и настройка сетевого оборудования", "price": 3000, "icon": "fas fa-tools", "description": "Мы предлагаем полный комплекс услуг по установке и настройке сетевого оборудования, включая маршрутизаторы, коммутаторы, серверы и другие устройства." }
    ],
    "category10": [
      { "id": 55, "name": "Удаление вирусов", "price": 2000, "icon": "fas fa-virus", "description": "Мы предлагаем профессиональные услуги по удалению вирусов, обеспечивая безопасность и стабильность вашей системы." },
      { "id": 56, "name": "Удаление троянов", "price": 2000, "icon": "fas fa-bug", "description": "Наша команда специалистов может обнаружить и удалить троянские программы, которые могут нанести вред вашему компьютеру или сети." },
      { "id": 57, "name": "Удаление руткитов", "price": 2500, "icon": "fas fa-sitemap", "description": "Мы предлагаем услуги по обнаружению и удалению руткитов, которые могут угрожать безопасности вашей системы." },
      { "id": 58, "name": "Удаление spyware и malware", "price": 2000, "icon": "fas fa-user-secret", "description": "Наш сервис может обнаружить и удалить шпионское и вредоносное ПО, которое может слежка за вашей активностью и нанести вред вашему компьютеру." },
      { "id": 59, "name": "Установка и обновление антивируса", "price": 1000, "icon": "fas fa-shield-virus", "description": "Мы можем установить и обновить антивирусное ПО для защиты вашего компьютера от вирусов, троянов, руткитов и других вредоносных программ." }
    ],
    "category11": [
      { "id": 60, "name": "Техническая поддержка на дому", "price": 2000, "icon": "fas fa-home", "description": "Наша команда специалистов предоставляет услуги по технической поддержке прямо на вашем дому, решая проблемы с вашим оборудованием на месте." },
      { "id": 61, "name": "Техническая поддержка по телефону", "price": 1000, "icon": "fas fa-phone", "description": "Мы предлагаем услуги по технической поддержке по телефону, чтобы помочь вам решить любые проблемы, которые вы можете столкнуться с вашим оборудованием." },
      { "id": 62, "name": "Техническая поддержка через удаленный доступ", "price": 1500, "icon": "fas fa-desktop", "description": "Наша услуга технической поддержки через удаленный доступ позволяет нашим специалистам решать проблемы с вашим оборудованием, не выходя из офиса." },
      { "id": 63, "name": "Консультации по оборудованию", "price": 1000, "icon": "fas fa-headset", "description": "Мы предлагаем профессиональные консультации по вопросам выбора и использования компьютерного и сетевого оборудования." },
      { "id": 64, "name": "Консультации по программному обеспечению", "price": 1000, "icon": "fas fa-laptop-code", "description": "Наша команда готова помочь вам с любыми вопросами, связанными с выбором, установкой и использованием программного обеспечения." },
      { "id": 65, "name": "Уроки по работе с ПК", "price": 2000, "icon": "fas fa-user-graduate", "description": "Мы предлагаем уроки по работе с ПК, которые помогут вам повысить вашу компьютерную грамотность и эффективность использования компьютера." }
    ],
    "category12": [
      { "id": 66, "name": "Обслуживание серверов Windows", "price": 4000, "icon": "fas fa-server", "description": "Мы предлагаем профессиональные услуги по обслуживанию серверов Windows, обеспечивая их стабильность и надежность." },
      { "id": 67, "name": "Обслуживание серверов Linux", "price": 4000, "icon": "fas fa-server", "description": "Наша команда специалистов предоставляет услуги по обслуживанию серверов Linux, обеспечивая их надежную и эффективную работу." },
      { "id": 68, "name": "Настройка серверов баз данных", "price": 5000, "icon": "fas fa-database", "description": "Мы предлагаем услуги по настройке серверов баз данных, обеспечивая оптимальную работу ваших бизнес-приложений." },
      { "id": 69, "name": "Настройка и обслуживание серверов почты", "price": 3500, "icon": "fas fa-mail-bulk", "description": "Мы предлагаем услуги по настройке и обслуживанию серверов почты, обеспечивая бесперебойную работу ваших корпоративных почтовых сервисов." },
      { "id": 70, "name": "Настройка и обслуживание веб-серверов", "price": 3500, "icon": "fas fa-globe-europe", "description": "Наша команда специалистов предлагает услуги по настройке и обслуживанию веб-серверов, обеспечивая надежность и производительность вашего веб-сайта." },
      { "id": 71, "name": "Обслуживание серверов файлов", "price": 4000, "icon": "fas fa-folder", "description": "Мы предлагаем услуги по обслуживанию серверов файлов, гарантируя безопасность и доступность ваших файлов." }
    ]
  };

  function addToCart(service) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let serviceWithId = { ...service, id: service.id };
    cart.push(serviceWithId);
    localStorage.setItem('cart', JSON.stringify(cart));

    console.log(cart);
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
