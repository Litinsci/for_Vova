/*

мне нужно чтобы при нажатии на хедер бургер:
1. у него появлялся класс хедер бургер актив, который делает:
1.1 меняет header__menu-burger-element: 2-й исчезает,
а 1-й и  3-й меняют угол наклона и расположение на странице так, чтобы образовался крестик.
1.2 у класса хедер меню появляется класс хедер меню актив, который делает "видимым" меню, т.е. 
опускает его вниз на страницу, под бургер (при отстутствии класса меню находится вверху (задан топ - 1000px) )
при повторном нажатии на хедер бургер классы хедер бургер актив и хедер меню актив убираются.

*/

// const burgerButton = document.getElementById("burger");
// const headerMenu = document.getElementById("header__menu");

// burgerButton.addEventListener("click", () => {
//   if (!burgerButton.classList.contains("header__menu-burger-active")) {
//     burgerButton.classList.add("header__menu-burger-active");
//     headerMenu.classList.add("header__menu-active");
//   } else {
//     burgerButton.classList.remove("header__menu-burger-active");
//     headerMenu.classList.remove("header__menu-active");
//   }
// });

/*

Есть список пользователей, у каждого есть имя и роль(админ, сотрудник, редактор), 
    мы должны сделать отдельные списки
        1. Сотрудники
        2. Админы

При обращении к пользователю - каждый из них должен иметь метод который выведет в консоль ('Привет, я ' + [его имя])

*/
