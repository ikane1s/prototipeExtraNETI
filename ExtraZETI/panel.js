// Объявление переменных
const leftPanel = document.querySelector(".leftPanel");
const content = document.querySelector(".mainBlock");
const button = document.querySelector(".menu");
const content2 = document.querySelector(".calendar_block-main")
const content3 = document.querySelector('.settings_block')

function ClosePanel() {
    leftPanel.classList.toggle('open'); // Переключаем класс 'open'
    content.classList.toggle('shift');
    content2.classList.toggle('shift')
    content2.classList.toggle('shiftCalend')
    content3.classList.toggle('shift')
    content3.classList.toggle('shiftCalend')
}

// Добавляем обработчик события на кнопку
button.addEventListener('click', ClosePanel);