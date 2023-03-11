const buttonMenu = document.querySelector(".header__button");
const navMenu = document.querySelector(".header__nav");
const itemsMenu = [...document.querySelectorAll(".list__item")];

const slider = document.querySelector(".carrousel__img-photo");

//Toggle Menu
buttonMenu.addEventListener("click", () => {
  navMenu.classList.toggle("menu-visible");
});

itemsMenu.forEach((item) => {
  item.addEventListener("click", () => {
    navMenu.classList.remove("menu-visible");
  });
});
