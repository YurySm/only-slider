# Only slider

## О приложении
Это приложение [React](https://react.dev/) со слайдером [Swiper](https://swiperjs.com/react) построенное на [Webpack](https://webpack.js.org/).
Приложение строится на архитектуре [FSD](https://feature-sliced.design/ru/)

Добавлен [Husky](https://typicode.github.io/husky/) для запуска прогона линтеров перед коммитом

## Скрипты
### Запуск приложения с дев сервером
```bash
npm start
```
### Прод сборка
```bash
npm run build:prod
```

### Дев сборка
```bash
npm run build:dev
```
_Для остановки анализатора нажмите <kbd>Ctrl</kbd> + <kbd>C</kbd>_

### Eslint
```bash
npm run lint:ts
```
### Eslint с исправлением
```bash
npm run lint:ts:fix
```

### Stylelint
```bash
npm run lint:scss
```
### Stylelint с исправлением
```bash
npm run lint:scss:fix
```