// inputs
const courseName = document.querySelector('#courseName');
const section = document.querySelector('#section');
const subject = document.querySelector('#subject');
const auditorium = document.querySelector('#auditorium');

const listBlocks = document.querySelector('.mainBlock_blocks');
const emptyList = document.querySelector('.emptyList');

let tasks = [];

function addTask(e) {
    e.preventDefault();
    
    const courseNameText = courseName.value;
    const sectionText = section.value;

    const colors = [
        '#001F3F',
        '#004D00',
        '#3D0B6E',
        '#8B0000',
        '#333333',
        '#1C1C1C',
        '#0056b3',
        '#007A33',
        '#FF4500',
        '#800000'
    ];
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    const taskHTML = 
        `
                <div class="mainBlock_block">
                    <div class="block_up" style="background: ${randomColor};">
                        <div class="block_text">
                            <div class="block_name">
                                ${courseNameText}
                            </div>
                            <div class="block_chapter">
                                ${sectionText}
                            </div>
                        </div>
    
                        <div class="block_control">
                            <svg class="icon_block-share" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.75 5C13.75 5.9665 12.9665 6.75 12 6.75C11.0335 6.75 10.25 5.9665 10.25 5C10.25 4.0335 11.0335 3.25 12 3.25C12.9665 3.25 13.75 4.0335 13.75 5ZM13.75 19C13.75 19.9665 12.9665 20.75 12 20.75C11.0335 20.75 10.25 19.9665 10.25 19C10.25 18.0335 11.0335 17.25 12 17.25C12.9665 17.25 13.75 18.0335 13.75 19ZM12 13.75C12.9665 13.75 13.75 12.9665 13.75 12C13.75 11.0335 12.9665 10.25 12 10.25C11.0335 10.25 10.25 11.0335 10.25 12C10.25 12.9665 11.0335 13.75 12 13.75Z"/>
                            </svg>
                        </div>

                    </div>
                    <div class="block_empty"></div>
                    <div class="block_down">
                        <div class="block_downIco">
                            <div class="downIco1">
                                <svg class="icon_block" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5C13 4.44772 13.4477 4 14 4H19C19.5523 4 20 4.44772 20 5V18H22C22.5523 18 23 18.4477 23 19C23 19.5523 22.5523 20 22 20H19H14H10H5H2C1.44772 20 1 19.5523 1 19C1 18.4477 1.44772 18 2 18H4V12C4 11.4477 4.44772 11 5 11H10C10.5523 11 11 11.4477 11 12V18H13V5ZM15 18H18V6H15V18ZM9 18V13H6V18H9Z"/>
                                </svg>
                            </div>
                            <div class="downIco2 blockCart">
                                <svg class= "icon_block blockCart" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V6H17H19C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V8H5C4.44772 8 4 7.55228 4 7C4 6.44772 4.44772 6 5 6H7H9V5ZM10 8H8V18C8 18.5523 8.44772 19 9 19H15C15.5523 19 16 18.5523 16 18V8H14H10ZM13 6H11V5H13V6ZM10 9C10.5523 9 11 9.44772 11 10V17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17V10C9 9.44772 9.44772 9 10 9ZM14 9C14.5523 9 15 9.44772 15 10V17C15 17.5523 14.5523 18 14 18C13.4477 18 13 17.5523 13 17V10C13 9.44772 13.4477 9 14 9Z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div> 
    `
    ;
    
    listBlocks.insertAdjacentHTML('beforeend', taskHTML);

    courseName.value = '';
    section.value = '';
    subject.value = '';
    auditorium.value = '';

    overlay.classList.remove('show');
    addTaskForm.classList.remove('show');
    
    if (listBlocks.children.length > 1) {
        emptyList.classList.add('none');
    }
}

function deleteTask(e) {
    if (e.target.classList.contains('blockCart')) {
        const confirmation = confirm('Вы уверены, что хотите удалить задачу?');
        if (confirmation) {
            const taskBlock = e.target.closest('.mainBlock_block'); // Находим родительский элемент задачи
            taskBlock.remove(); // Удаляем задачу
            if (listBlocks.children.length === 1) {
                emptyList.classList.remove('none'); // Показываем сообщение о пустом списке
            }
        }
    }
}


form.addEventListener('submit', addTask);
listBlocks.addEventListener('click', deleteTask); // Используем делегирование событий
