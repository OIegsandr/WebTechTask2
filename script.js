let textareaCount = 0;

function changeColor(color) {
    document.body.style.backgroundColor = color;
}

function showMessage() {
    const userName = document.getElementById('userName');
    const userText = document.getElementById('userText');
    const userImage = document.getElementById('userImage');

    let imageName = 'не выбрано';
    if (userImage.files.length > 0) {
        imageName = userImage.files[0].name;
    }

    alert('Имя: ' + userName.value + '\nСообщение: ' + userText.value + '\nИзображение: ' + imageName);
}

function checkData(event) {
    event.preventDefault();

    const login = document.getElementById('userLogin');
    const password = document.getElementById('userPassword');
    const email = document.getElementById('userEmail');
    const subscribe = document.getElementById('subscribe');
    const gender = document.querySelector('input[name="gender"]:checked');
    const city = document.getElementById('userCity');

    let greeting = 'Уважаемый(ая)';
    if (gender != null && gender.value == 'male') greeting = 'Уважаемый';
    if (gender != null && gender.value == 'female') greeting = 'Уважаемая';

    document.getElementById('resultTitle').textContent = greeting + ' ' + login.value + ', проверьте свои данные:';
    document.getElementById('resultLogin').textContent = 'Логин - ' + login.value;
    document.getElementById('resultPassword').textContent = 'Пароль - ' + password.value;
    document.getElementById('resultEmail').textContent = 'Почта - ' + email.value;
    document.getElementById('resultCity').textContent = 'Город - ' + city.options[city.selectedIndex].text;
    document.getElementById('resultSubscribe').textContent = subscribe.checked ? 'Вы подписаны на рассылку' : 'Вы не подписаны на рассылку';
    document.getElementById('resultBlock').style.display = 'flex';
}

function createTextArea(){
    const numberInput = document.getElementById('createNumber');
    const container = document.getElementById('container');

    textareaCount = Number(numberInput.value);
    if (!Number.isInteger(textareaCount) || textareaCount <= 0) {
        textareaCount = 0;
        numberInput.value = '';
    }
    container.innerHTML = '';

    for (let i = 0; i < textareaCount; i++) {
        const block = document.createElement('div');
        block.className = 'textBlock';

        const textarea = document.createElement('textarea');
        textarea.id = `textarea-${i}`;
        textarea.className = 'textAreaStyle textColorBlack backgroundWhite';
        textarea.rows = 3;

        const label = document.createElement('label');
        label.htmlFor = textarea.id;
        label.textContent = `Блок ${i + 1}:`;

        // Подгружаем сохранённый текст этого блока
        const savedValue = localStorage.getItem(textarea.id);
        if (savedValue !== null) {
            textarea.value = savedValue;
        }

        // Сохраняем текст при каждом изменении
        textarea.addEventListener('input', function() {
            localStorage.setItem(textarea.id, textarea.value);
        });

        block.appendChild(label);
        block.appendChild(textarea);
        container.appendChild(block);
    }
}

function createNews() {
    const header = document.getElementById('newsHeader');
    const text = document.getElementById('newsText');
    const author = document.getElementById('newsAuthor');
    const image = document.getElementById('newsImage');

    const card = document.getElementById('newsCard');
    const picture = document.getElementById('newsPicture');

    document.getElementById('newsTitle').textContent = header.value;
    document.getElementById('newsBody').textContent = text.value;
    document.getElementById('newsBy').textContent = 'Объявил: ' + author.value;
    document.getElementById('newsDate').textContent = new Date().toLocaleDateString('ru-RU');

    if (image.files.length > 0) {
        picture.src = URL.createObjectURL(image.files[0]);
        picture.style.display = 'block';
    } else {
        picture.style.display = 'none';
    }
    card.style.display = 'flex';
}

function changeTheme() {
    const isDarkTheme = document.body.classList.toggle('dark');
    const theme = isDarkTheme ? 'dark' : 'light';
    setCookie('theme', theme, { 'max-age': 2592000 });
    localStorage.setItem('theme', theme);
}

window.onload = function() {
    let theme = getCookie('theme');
    if (theme == undefined) theme = localStorage.getItem('theme');

    if (theme == 'dark') {
        document.body.classList.add('dark');
    }
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {
    options = {
        path: '/',
        ...options
    };
    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }
    document.cookie = updatedCookie;
}
function deleteCookie(name) {
    setCookie(name, "", {
        'max-age': -1   
    });
}

//LocalStorage
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userForm');
    if (!form) return; // формы нет на index.html и news.html

    form.addEventListener('focusout', function(event) {
        const field = event.target;
        if (field.id && field.type !== 'button' && field.type !== 'submit'){
            localStorage.setItem(field.id, field.value);
        }
    });

    const restoreIDs = ['userLogin', 'userPassword', 'userEmail'];
    restoreIDs.forEach(function(id) {
        const textarea = document.getElementById(id);
        const savedValue = localStorage.getItem(id);
        if (textarea && savedValue !== null) {
            textarea.value = savedValue;
        }
    });
});

