const leftBtn = document.querySelector('.swichWeeks_btn-left');
const rightBtn = document.querySelector('.swichWeeks_btn-right');
const weeksText = document.querySelector('.swichWeeks_text'); // Получаем элемент weeksText

const dayElements = document.querySelectorAll('.dayOfTheWeek'); // Получаем все элементы с классом 'dayOfTheWeek'


let today = new Date(); // Текущая дата
let firstDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + 1); // Первый день недели

function formatDate(date) {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('ru-RU', options);
}

function updateDays() {
    // Удаляем класс activeDay у всех дней перед обновлением
    dayElements.forEach(day => {
        day.querySelector('.dayOfTheWeek_num-item').classList.remove('activeDay');
        day.querySelector('.dayOfTheWeek_day').classList.remove('activeDay');
    });

    for (let i = 0; i <= 6; i++) {
        const day = new Date(firstDay); // Копируем первый день
        day.setDate(firstDay.getDate() + i); // Устанавливаем нужный день
        dayElements[i].querySelector('.dayOfTheWeek_num-item').innerText = day.getDate(); // Меняем текст на номер дня
        
        // Сравниваем полные даты
        if (today.toDateString() === day.toDateString()) {
            dayElements[i].querySelector('.dayOfTheWeek_num-item').classList.add('activeDay');
            dayElements[i].querySelector('.dayOfTheWeek_day').classList.add('activeDay');
        }

        const dayNumber = day.getDate(); // Получаем номер дня
        if (dayNumber < 10) {
            dayElements[i].querySelector('.dayOfTheWeek_num-item').style.padding = '10px 15px'; // Однозначное число
        } else {
            dayElements[i].querySelector('.dayOfTheWeek_num-item').style.padding = '10px'; // Двузначное число
        } 
    }
    
    // Обновляем текст в weeksText
    const startOfWeek = new Date(firstDay);
    const endOfWeek = new Date(firstDay);
    endOfWeek.setDate(startOfWeek.getDate() + 6); // Конец недели через 6 дней
    weeksText.innerText = `${formatDate(startOfWeek)} – ${formatDate(endOfWeek)}`; // Обновляем текст
}

function swapLeft() {
    firstDay.setDate(firstDay.getDate() - 7); // Уменьшаем на 7 дней
    updateDays(); // Обновляем дни
}

function swapRight() {
    firstDay.setDate(firstDay.getDate() + 7); // Увеличиваем на 7 дней
    updateDays(); // Обновляем дни
}

// Инициализация отображения дней и текста
updateDays();

leftBtn.addEventListener('click', swapLeft);
rightBtn.addEventListener('click', swapRight);

console.log(today.getDate().toString().length);
