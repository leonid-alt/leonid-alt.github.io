// Полный диагностический скрипт
$(document).ready(function() {
  console.log("=== ДИАГНОСТИКА ВЫПАДАЮЩЕГО МЕНЮ ===");
  
  // 1. Размеры
  console.log("Ширина окна:", $(window).width());
  console.log("Медиазапрос >767px:", window.matchMedia("(min-width: 767px)").matches);
  
  // 2. Элементы DOM
  console.log("Элементы .dropdown:", $('.dropdown').length);
  console.log("Элементы .submenu:", $('.submenu').length);
  
  // 3. CSS-свойства
  if ($('.submenu').length) {
    let submenu = $('.submenu').first();
    console.log("CSS .submenu:");
    console.log("  display:", submenu.css('display'));
    console.log("  position:", submenu.css('position'));
    console.log("  top:", submenu.css('top'));
    console.log("  left:", submenu.css('left'));
    console.log("  z-index:", submenu.css('z-index'));
  }
  
  // 4. Родительские свойства
  if ($('.dropdown').length) {
    let dropdown = $('.dropdown').first();
    console.log("CSS .dropdown:");
    console.log("  position:", dropdown.css('position'));
    console.log("  display:", dropdown.css('display'));
  }
  
  // 5. Временный тест hover
  console.log("Добавляю тестовый hover...");
  $('.dropdown').hover(
    function() { 
      console.log("Hover IN - показываю меню");
      $(this).find('.submenu').css({
        'display': 'block',
        'background': '#ff000055',
        'border': '2px solid red'
      });
    },
    function() { 
      console.log("Hover OUT - скрываю меню");
      $(this).find('.submenu').css({
        'display': 'none',
        'background': '',
        'border': ''
      });
    }
  );
  
  console.log("=== ДИАГНОСТИКА ЗАВЕРШЕНА ===");
});