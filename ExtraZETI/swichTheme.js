const toggleThemeBtn = document.querySelector('.settings_blackTheme-btn');
const themeAnimatinBtn = document.querySelector('.radio-inner');

// Обработчик события для кнопки переключения темы
toggleThemeBtn.addEventListener('click', function() {
    // Переключаем классы для темы и анимации
    document.body.classList.toggle('dark-theme');
    themeAnimatinBtn.classList.toggle('activeTheme');
    
    // Сохранение состояния темы в localStorage
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }

    // Сохранение состояния анимации в localStorage
    if (themeAnimatinBtn.classList.contains('activeTheme')) {
        localStorage.setItem('animationState', 'active');
    } else {
        localStorage.setItem('animationState', 'inactive');
    }
});

// Установка темы и состояния анимации при загрузке страницы
window.onload = function() {
    const savedTheme = localStorage.getItem('theme');
    const savedAnimationState = localStorage.getItem('animationState');

    // Устанавливаем тему
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    // Устанавливаем состояние анимации кнопки
    if (savedAnimationState === 'active') {
        themeAnimatinBtn.classList.add('activeTheme');
    }
}