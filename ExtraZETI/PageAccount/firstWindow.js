// регистрация переменные
const regLogin = document.querySelector('.regLogin');
const regPass = document.querySelector('.regPass');
const regBtn = document.querySelector('.reg_btn');

let users = {};

function User(name, pass) {
    this.name = name; // Сохраняем логин
    this.pass = pass; // Сохраняем пароль
}

function createID(users) {
    return Object.keys(users).length;
}

function verificationLogin() {
    for (let i = 0; i < Object.keys(users).length; i++) {
        if (regLogin.value === users['User' + i].name) {
            console.log('Пользователь с таким логином уже существует!');
            return false; // Логин занят
        }
    }
    return true; // Логин свободен
}

function AddAcc() {
    if (!verificationLogin()) {
        regLogin.value = '';
        regPass.value = '';
        return; // Если логин занят, выходим из функции
    }

    const nameUser = regLogin.value;
    const passUser = regPass.value;

    const user = new User(nameUser, passUser); // Создаем пользователя с логином и паролем

    const userID = 'User' + createID(users);
    users[userID] = user; // Сохраняем пользователя в объекте users

    // Очистка полей
    regLogin.value = '';
    regPass.value = '';
    console.log(users[userID].name);
    
    console.log(users); // Выводим всех пользователей в консоль
}

regBtn.addEventListener('click', AddAcc);

// Вход

// вход переменные
const entryLogin = document.querySelector('.entryLogin');
const entryPass = document.querySelector('.entryPass');
const entryBtn = document.querySelector('.entry_btn');

function entry() {
    let found = false; // Флаг для отслеживания успешного входа

    for (let i = 0; i < Object.keys(users).length; i++) {
        if (entryLogin.value === users['User' + i].name && entryPass.value === users['User' + i].pass) {
            console.log('Вход успешно выполнен!');
            found = true; // Успешный вход
            break; // Выходим из цикла, если нашли пользователя
        }
    }

    if (!found) {
        console.log('Не совпадает логин или пароль!');
    }

    entryLogin.value = '';
    entryPass.value = '';
}

entryBtn.addEventListener('click', entry);
