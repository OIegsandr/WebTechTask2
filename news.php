<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Новости</title>
    <link rel="stylesheet" href="styleClass.css">
    <link rel="stylesheet" href="reset.css">
    <script src="script.js"></script>
</head>
<body>
    <?php
    require('headerTemplate.html');
    ?><br>

    <div class="centreFlex">
        <form class="wholeBorderStyle textColorWhite centreFlex">
            <div class="flexSetCentre"><br><br>
                <li class="centreFlex"><h1>Новая новость</h1></li><br>
                <div>
                    <li><label for="newsHeader">Заголовок:</label></li>
                    <input type="text" id="newsHeader" class="inputFieldStyle" style="width: 250px;">
                </div><br>
                <div>
                    <li><label for="newsText">Текст:</label></li>
                    <textarea id="newsText" cols="30" rows="4" class="textAreaStyle"></textarea>
                </div><br>
                <div>
                    <li><label for="newsAuthor">Автор:</label></li>
                    <input type="text" id="newsAuthor" class="inputFieldStyle" style="width: 250px;">
                </div><br>
                <div>
                    <li><label for="newsImage">Загрузить изображение:</label></li>
                    <input type="file" id="newsImage" accept="image/*">
                </div><br>
                <div class="flexSetCentre">
                    <li>
                        <input type="button" value="Создать" class="inputFieldStyle " style="height: 30px; width: 200px;" onclick="createNews()">
                    </li>
                </div><br>
            </div>
        </form>
    </div><br>

    <div class="centreFlex">
        <div id="newsCard" class="newsCardStyle">
            <li><h1 id="newsTitle"></h1></li>
            <img id="newsPicture" alt="" width="300">
            <li id="newsBody"></li><br>
            <li id="newsDate" class="newsSmallText"></li>
            <li id="newsBy" class="newsSmallText"></li>
        </div>
    </div><br>

    <?php
    require('footerTemplate.html')
    ?>
</body>
</html>
