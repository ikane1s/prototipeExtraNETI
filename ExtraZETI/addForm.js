const overlay = document.querySelector('.overlay');
const addTaskForm = document.querySelector('.addTaskForm');
const openFormButton = document.querySelector('.rightIcons_add');
const closeButtons = document.querySelectorAll('.addTaskForm_btnClose');

// Функция для открытия формы
openFormButton.onclick = function() {
    overlay.classList.add('show');
    addTaskForm.classList.add('show');
}

// Функция для закрытия формы и затемнения
closeButtons.forEach(button => {
    button.onclick = function() {
        overlay.classList.remove('show');
        addTaskForm.classList.remove('show');
    }
});

// Закрытие формы при клике на затемнение
overlay.onclick = function() {
    overlay.classList.remove('show');
    addTaskForm.classList.remove('show');
}
