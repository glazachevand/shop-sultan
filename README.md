# Интернет магазин Sultan
Часть интернет-магазина по макету из Figma. Страницы: каталог, корзина товаров, карточка отдельного товара, страница администратора. Используются локальные данные (в json файле, используется json-сервер). Также данные сохраняются в localStorage. На странице каталога реализованы сортировка товаров, поиск по ключевому слову, фильтрация по типам ухода, производителям, цене. Каждая карточка товара ведёт на соответствующую страницу товара с подгруженной информацией. Со страницы каталога и страниц товаров можно добавлять товары в корзину. На странице корзины товаров можно управлять ее содержимым.  Также сделана мини-админка с возможностью  управлять списком товаров и категорий. Используется простая авторизация для входа в режим Администратора: кнопка в правом верхнем углу, данные для авторизации - логин admin, пароль 12345. Реализован функционал перевода сайта на английский язык (кроме базы данных). Сделано тестирование, различные варианты тестов - unit тесты (Jest), интеграционные тесты (React Testing Library), скриншотные тесты (loki, storybook), e2e тесты (cypress), . Вёрстка адаптивная.

<b><i>Основные используемые технологии</i></b> - TypeScript, React, , React-Router-Dom, Redux Toolkit, RTK Query, i18next, ESlint, HTML, SCSS, модули SCSS, Figma.

<b>Порядок работы:</b>
-	Установите зависимости командой 'npm install'
-	Запустите json server командой 'npm run server'
-	Запустите frontend в режиме разработчика 'npm run start'
-	Запуск unit тестов - 'npm run test:unit'
-	Запуск storybook - 'npm run sb'
-	Запуск скриншотных тестов - 'npm run test:ui'
-	Запуск e2e тестов в интерактивном режиме - 'npm run cy:open'
