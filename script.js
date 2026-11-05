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
