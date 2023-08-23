document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию
    
    // Получаем значения полей формы
    var name = document.getElementById("name").value;
    var city = document.getElementById("city").value;
    var email = document.getElementById("email").value;
    var question = document.getElementById("question").value;
    
    // Здесь вы можете выполнить нужные вам действия с полученными данными, например, отправить их на сервер или обработать локально
    
    // Очистка полей формы
    document.getElementById("name").value = "";
    document.getElementById("city").value = "";
    document.getElementById("email").value = "";
    document.getElementById("question").value = "";
  });

  
  document.addEventListener("DOMContentLoaded", function() {
    // Получаем текущий путь страницы
    var path = window.location.pathname;
  
    // Получаем все ссылки в навигации
    var navLinks = document.querySelectorAll("nav ul li a");
  
    // Проходимся по каждой ссылке и проверяем, совпадает ли ее href с текущим путем страницы
    for (var i = 0; i < navLinks.length; i++) {
      var link = navLinks[i];
  
      // Если href ссылки совпадает с текущим путем страницы, добавляем класс "active"
      if (link.getAttribute("href") === path) {
        link.classList.add("active");
      }
    }
  });
  window.addEventListener('load', function () {
    const doorItems = document.querySelectorAll('.door-item');
  
    doorItems.forEach(function (doorItem) {
      doorItem.addEventListener('mouseover', function () {
        doorItem.style.transform = 'scale(1.05)';
      });
  
      doorItem.addEventListener('mouseout', function () {
        doorItem.style.transform = 'scale(1)';
      });
    });
  });
  

  