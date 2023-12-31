
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


function showDoorDetails(doorId) {
  var doorDetails = document.getElementById('doorDetails');
  var doorImage = document.getElementById('doorImage');
  var doorTitle = document.getElementById('doorTitle');
  var doorSpecs = document.getElementById('doorSpecs');

  // Здесь можно добавить логику для загрузки данных о двери с сервера
  // Ниже представлен пример заполнения данных статически
  if (doorId === 1) {
    doorImage.src = '/img/служебная.png';
    doorTitle.textContent = 'Служебная';
    doorSpecs.innerHTML = '<li>Данная модель как правило применяется для установки в служебные помещения (бойлерные, подвалы, подсобные помещения, склады и т.п.)</li>';
  } else if (doorId === 2) {
    doorImage.src = '/img/эконом2.png';
    doorTitle.textContent = 'Эконом 2';
    doorSpecs.innerHTML = '<li>Дверь "Эконом" – это оптимальное решение для тех, кто ценит практичность и функциональность. Простота дизайна и надежность конструкции делают эту дверь идеальным выбором для экономных решений без ущерба для безопасности и удобства. "Эконом" – это дверь, созданная для тех, кто ищет доступное и надежное решение для своего входа. Данная модель является бюджетным вариантом среди коллекции "Твердый знак".</li>';
  } else if (doorId === 3) {
    doorImage.src = '/img/эконом3.png';
    doorTitle.textContent = 'Эконом 3 ';
    doorSpecs.innerHTML = '<li>Данная модель является бюджетным выгодным вариантом для строительных компаний.</li>';
  } else if (doorId === 4) {
    doorImage.src = '/img/лидер.png';
    doorTitle.textContent = 'Лидер';
    doorSpecs.innerHTML = '<li>Дверь "Лидер" – воплощение силы и авторитета. Эта дверь призвана защитить ваш дом, обеспечивая надежность и безопасность.Данная модель идеально подойдет для установки в квартиру или частный сектор.</li>';
  } else if (doorId === 5) {
    doorImage.src = '/img/лидерОбъем.png';
    doorTitle.textContent = 'Лидер объем';
    doorSpecs.innerHTML = '<li>Дверь "Лидер объем" – это величественное воплощение авторитета и стиля. Уникальный объемный дизайн придает этой двери выдающийся внешний вид, в то время как надежность и безопасность остаются на первом месте. "Лидер объем" создана для тех, кто ищет не только защиту, но и впечатляющий элемент дизайна, подчеркивающий индивидуальность и решительность владельца.Данная модель идеально подойдет для установки в квартиру или частный сектор.</li>';
  } else if (doorId === 6) {
    doorImage.src = '/img/бронит.png';
    doorTitle.textContent = 'Бронит';
    doorSpecs.innerHTML = '<li>Дверь "Бронит" обеспечивает надежную защиту, прочность и хороший теплоизоляционный эффект благодаря своей прочной стальной конструкции, современным замкам и уплотнителям, что делает ее отличным выбором для тех, кто ценит безопасность и комфорт в своем жилище или офисе.</li>';
  } else if (doorId === 7) {
    doorImage.src = '/img/молния.png';
    doorTitle.textContent = 'Молния';
    doorSpecs.innerHTML = '<li>Дверь "Молния" сочетает в себе надежность, современный дизайн и высокие технические характеристики, что делает ее идеальным выбором для тех, кто ищет уникальное сочетание стиля и безопасности.</li>';
  } else if (doorId === 8) {
    doorImage.src = '/img/стрела.png';
    doorTitle.textContent = 'Стрела';
    doorSpecs.innerHTML = '<li>Дверь "Стрела" представляет собой сбалансированный продукт, объединяющий прочность, безопасность и эстетику, что делает ее подходящим выбором для входной двери в жилых и коммерческих зданиях.</li>';
  } else if (doorId === 9) {
    doorImage.src = '/img/Винтаж.png';
    doorTitle.textContent = 'Винтаж';
    doorSpecs.innerHTML = '<li>Дверь "Винтаж" сочетает в себе элегантный внешний вид, прочность и технические характеристики, делая ее отличным выбором для тех, кто ищет стильное и безопасное решение для входной двери.</li>';
  } else if (doorId === 10) {
    doorImage.src = '/img/рубеж.png';
    doorTitle.textContent = 'Рубеж';
    doorSpecs.innerHTML = '<li>Дверь "Рубеж" объединяет в себе безопасность, эффективную теплоизоляцию и стильный дизайн, что делает её отличным выбором для входных дверей.</li>';
  } else if (doorId === 11) {
    doorImage.src = '/img/комфорт.png';
    doorTitle.textContent = 'Комфорт';
    doorSpecs.innerHTML = '<li>Дверь "Комфорт" сочетает в себе высокую функциональность, стильный дизайн и защитные характеристики, что делает её идеальным выбором для создания уютного и безопасного входа в помещение.</li>';
  } else if (doorId === 12) {
    doorImage.src = '/img/викинг.png';
    doorTitle.textContent = 'Викинг';
    doorSpecs.innerHTML = '<li>Дверь "Викинг" – это мощная входная защита, воплощающая силу и надежность древних воинов. С техническими характеристиками, гарантирующими безопасность и теплоизоляцию, она создана для тех, кто ценит стиль, прочность и комфорт в доме.</li>';
  } else if (doorId === 13) {
    doorImage.src = '/img/гамма.png';
    doorTitle.textContent = 'Гамма';
    doorSpecs.innerHTML = '<li>Дверь "Гамма" – это воплощение современного дизайна и функциональности. Сочетая в себе элегантность и прочность, она создана для обеспечения безопасности и комфорта в вашем пространстве. "Гамма" – это идеальное решение для тех, кто ищет стильную и надежную входную дверь.</li>';
  } else if (doorId === 14) {
    doorImage.src = '/img/восток.png';
    doorTitle.textContent = 'Восток';
    doorSpecs.innerHTML = '<li>Дверь "Восток" – это величественное сочетание восточной изысканности и современной надежности. Она не только обеспечивает защиту вашего дома, но и приносит ноту экзотики в окружающую обстановку. С изысканной отделкой и техническим совершенством, дверь "Восток" создана для тех, кто ищет уникальное сочетание стиля и безопасности.</li>';
  } else if (doorId === 15) {
    doorImage.src = '/img/коллекция-фантазия.png';
    doorTitle.textContent = 'Коллекция фантазия';
    doorSpecs.innerHTML = '<li>Коллекция дверей "Фантазия" приглашает в мир бесконечных возможностей и креативности. Эти двери воплощают ваши мечты в реальность, добавляя характер и индивидуальность в каждый уголок вашего дома. От классических до современных дизайнов, коллекция "Фантазия" создана для тех, кто хочет выразить свою уникальность через входную дверь и создать впечатляющее первое впечатление.</li>';
  } else if (doorId === 16) {
    doorImage.src = '/img/коллекция-престиж.png';
    doorTitle.textContent = 'Коллекция престиж';
    doorSpecs.innerHTML = '<li>Коллекция дверей "Престиж" воплощает роскошь и изысканность в каждой детали. Эти двери созданы для тех, кто ценит элегантность и высокий стиль. Надежность и эксклюзивность сочетаются в этой коллекции, придавая вашему дому неповторимый характер. "Престиж" – это выбор тех, кто ищет не просто дверь, а визуальное воплощение утонченности и уникальности.</li>';
  } else if (doorId === 17) {
    doorImage.src = '/img/коллекция=эллегия.png';
    doorTitle.textContent = 'Коллекция эллегия';
    doorSpecs.innerHTML = '<li>Коллекция дверей "Элегия" переносит вас в мир изысканной красоты и гармонии. Эти двери созданы для того, чтобы вдохновлять и создавать атмосферу уюта в каждом доме. "Элегия" объединяет в себе изысканный дизайн и функциональность, подчеркивая индивидуальность владельцев. Эта коллекция – для тех, кто стремится создать идеальное сочетание элегантности и уютной атмосферы.</li>';
  }


  doorDetails.classList.add('show');

}
function placeOrder() {
  window.location.href = '/html/libs/door-details.html';
}


function hideDoorDetails() {
  var doorDetails = document.getElementById('doorDetails');
  doorDetails.classList.remove('show');
}
var dropdownItems = document.querySelectorAll('.dropdown-item');

dropdownItems.forEach(function (item) {
  item.addEventListener('mouseenter', function () {
    this.querySelector('.dropdown-menu').style.display = 'block';
  });

  item.addEventListener('mouseleave', function () {
    this.querySelector('.dropdown-menu').style.display = 'none';
  });
});