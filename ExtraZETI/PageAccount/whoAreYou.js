const imStudent = document.querySelector('#studentBtn');
const imTeacher = document.querySelector('#teacherBtn');
const whoAreYou = document.querySelector('.whoAreYou');
const wrapper = document.querySelector('.wrapper');

//ты студент? регстрация
const youAreStudentTextReg = document.querySelector('.youAreStudentTextReg')
//ты учитель? регстрация
const youAreTeacherTextReg = document.querySelector('.youAreTeacherTextReg')
//ты студент? вход
const youAreStudentTextEntry = document.querySelector('.youAreStudentTextEntry')
//ты учитель? вход
const youAreTeacherTextEntry = document.querySelector('.youAreTeacherTextEntry')


//регистрация. студент вход
const notRegistrTextStud = document.querySelector('.notRegistrTextStud')
//регистрация. учитель вход
const notRegistrTextTeach = document.querySelector('.notRegistrTextTeach')
//вход. студент регистрация
const haveAccStud = document.querySelector('.haveAccStud')
//вход. учитель регистрация
const haveAccTeach = document.querySelector('.haveAccTeach')


const entryAccStudHTML = `
<div class="entryAcc">
    <div class="entryAcc_item">
        <div class="entry">
            <div class="entry_text">Вход студента</div>
            <div class="input-container">
                <input class="entryLogin" type="text" id="studentInput" required="">
                <label for="studentInput" class="label">Логин</label>
                <div class="underline"></div>
            </div>
            <div class="input-container">
                <input class="entryPass" type="text" id="studentPass" required="">
                <label for="studentPass" class="label">Пароль</label>
                <div class="underline"></div>
            </div>
            <div class="entry_btn">
                <button id="entry_btnItem" class="role-button entry_btnEl">Войти</button>
            </div> 
        </div>
        <div class="downFunc">
            <div class="notRegistrText">
                Еще нет аккаунта? <div class="notRegistrText_item notRegistrTextStud">Зарегистрироваться</div>
            </div>
            <div class="youAreTeacherTextEntry">Вы преподаватель?</div>
        </div>
    </div>
</div>
`


const entryAccTeachHTML = `
<div class="entryAcc">
    <div class="entryAcc_item">
        <div class="entry">
            <div class="entry_text">Вход преподавателя</div>
            <div class="input-container">
                <input class="entryLogin" type="text" id="teacherInput" required="">
                <label for="teacherInput" class="label">Логин</label>
                <div class="underline"></div>
            </div>
            <div class="input-container">
                <input class="entryPass" type="text" id="teacherPass" required="">
                <label for="teacherPass" class="label">Пароль</label>
                <div class="underline"></div>
            </div>
            <div class="entry_btn">
                <button id="entry_btnItem" class="role-button entry_btnEl">Войти</button>
            </div> 
        </div>
        <div class="downFunc">
            <div class="notRegistrText">
                Еще нет аккаунта? <div class="notRegistrText_item notRegistrTextTeach">Зарегистрироваться</div>
            </div>
            <div class="youAreStudentTextEntry">Вы студент?</a>
        </div>
    </div>
</div>
`

const regAccStudHTML = `
<div class="reg">
    <div class="reg_item">
        <div class="reg_itemEl">
            <div class="reg_text">Регистрация студента</div>
            <div class="input-container">
                <input class="regLogin" type="text" id="regLoginStud" required="">
                <label for="regLoginStud" class="label">Логин</label>
                <div class="underline"></div>
            </div>
            <div class="input-container">
                <input class="regPass" type="text" id="regPassStud" required="">
                <label for="regPassStud" class="label">Пароль</label>
                <div class="underline"></div>
            </div>
            <div class="reg_btn">
                <button id="entry_btnItem" class="role-button reg_btnEl">Зарегистрироваться</button>
            </div> 
            <div class="downFunc">
                <div class="notRegistrText">
                    Уже есть аккаунт? <div class="notRegistrText_item haveAccStud"> Войти</div>
                </div>
            </div>
        </div>
    </div>
</div>
`
const regAccTeachHTML = `
<div class="reg">
    <div class="reg_item">
        <div class="reg_itemEl">
            <div class="reg_text">Регистрация преподавателя</div>
            <div class="input-container">
                <input class="regLogin" type="text" id="input" required="">
                <label for="input" class="label">Логин</label>
                <div class="underline"></div>
            </div>
            <div class="input-container">
                <input class="regPass" type="text" id="input" required="">
                <label for="input" class="label">Пароль</label>
                <div class="underline"></div>
            </div>
            <div class="reg_btn">
                <button id="entry_btnItem" class="role-button reg_btnEl">Зарегистрироваться</button>
            </div> 
            <div class="downFunc">
                <div class="notRegistrText">
                    Уже есть аккаунт? <div class="notRegistrText_item haveAccTeach"> Войти</div>
                </div>
            </div>
        </div>
    </div>
</div>
`

function loadPage(entryHTML) {
    // Update wrapper content
    wrapper.innerHTML = entryHTML;

    // Add event listeners for newly created elements
    const youAreTeacherTextEntry = document.querySelector('.youAreTeacherTextEntry');
    const youAreStudentTextEntry = document.querySelector('.youAreStudentTextEntry');

    const notRegistrTextStud = document.querySelector('.notRegistrTextStud')
    //регистрация. учитель вход
    const notRegistrTextTeach = document.querySelector('.notRegistrTextTeach')
    //вход. студент регистрация
    const haveAccStud = document.querySelector('.haveAccStud')
    //вход. учитель регистрация
    const haveAccTeach = document.querySelector('.haveAccTeach')

    if (youAreTeacherTextEntry) {
        youAreTeacherTextEntry.addEventListener('click', () => loadPage(entryAccTeachHTML));
    }

    if (youAreStudentTextEntry) {
        youAreStudentTextEntry.addEventListener('click', () => loadPage(entryAccStudHTML));
    }

    if (notRegistrTextStud) {
        notRegistrTextStud.addEventListener('click', () => loadPage(regAccStudHTML)); // Assuming it leads to student login
    }

    if (haveAccStud) {
        haveAccStud.addEventListener('click', () => loadPage(entryAccStudHTML)); // Assuming it leads to student login
    }

    if (notRegistrTextTeach) {
        notRegistrTextTeach.addEventListener('click', () => loadPage(regAccTeachHTML)); // Assuming it leads to student login
    }

    if (haveAccTeach) {
        haveAccTeach.addEventListener('click', () => loadPage(entryAccTeachHTML)); // Assuming it leads to student login
    }

}

imStudent.addEventListener('click', () => loadPage(entryAccStudHTML));
imTeacher.addEventListener('click', () => loadPage(entryAccTeachHTML));
youAreTeacherTextEntry.addEventListener('click', () => loadPage(entryAccTeachHTML))
