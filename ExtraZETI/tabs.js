const tabsBtn = document.querySelectorAll('.tabs_nav-btn');
const tabsItems = document.querySelectorAll('.tabs__item');

const calendarEl = document.querySelector('.calendar_block-main');
const mainBlock = document.querySelector('.mainBlock_main')
const iconAddForm = document.querySelector('.rightIcons_add');

tabsBtn.forEach(function(item) {
    item.addEventListener('click', function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('active')) {
            // Удаляем активные классы у всех кнопок и табов
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });

            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });

            // Добавляем активный класс к текущей кнопке и табу
            currentBtn.classList.add('active');
            currentTab.classList.add('active');

            // Проверяем состояние calendarEl после изменения активного таба
            if (!(mainBlock.classList.contains('active'))) {
                iconAddForm.classList.add('none'); // Скрываем иконку
            } else {
                iconAddForm.classList.remove('none'); // Показываем иконку
            }
        }
    });
});
