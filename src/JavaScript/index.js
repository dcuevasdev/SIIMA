const API_QUOTES = "https://api.api-ninjas.com/v1/quotes?category=education";

const buttonMenu = document.querySelector(".header__button");
const navMenu = document.querySelector(".header__nav");
const itemsMenu = [...document.querySelectorAll(".list__item")];

const slider = document.querySelector(".carrousel__img-photo");

const quoteSection = document.querySelector(".quote");

//Toggle Menu
buttonMenu.addEventListener("click", () => {
  navMenu.classList.toggle("menu-visible");
});

itemsMenu.forEach((item) => {
  item.addEventListener("click", () => {
    navMenu.classList.remove("menu-visible");
  });
});

//Carrousel
document.slider.src = "./src/assets/pictures/Grupal.jpg";
window.addEventListener("load", () => {
  const images = [];
  images[0] = "./src/assets/pictures/Grupal_1.jpg";
  images[1] = "./src/assets/pictures/Grupal_2.jpg";
  images[2] = "./src/assets/pictures/Grupal_3.jpg";
  images[3] = "./src/assets/pictures/Grupal_4.jpg";
  images[4] = "./src/assets/pictures/Grupal.jpg";
  images[5] = "./src/assets/pictures/Grupal_5.jpg";
  images[6] = "./src/assets/pictures/Grupal_6.jpg";
  images[7] = "./src/assets/pictures/Grupal_7.jpg";

  let indexImages = 0;
  const changePhoto = () => {
    document.slider.src = images[indexImages];

    if (indexImages < images.length - 1) {
      indexImages++;
    } else {
      indexImages = 0;
    }
  };

  setInterval(changePhoto, 3000);
});

//Quotes
async function fetchData(urlApi, obj) {
  const response = await fetch(urlApi, obj);
  const data = await response.json();
  return data;
}

const generateQuote = async () => {
  try {
    const quote = await fetchData(API_QUOTES, {
      method: "GET",
      headers: { "X-Api-Key": key },
      contentType: "application/json",
    });

    let toRender = quote
      .map((element) => {
        return `
        <p class="quote__phrase">"${element.quote}"</p>
        <span class="quote__author">${element.author}</span>
      `;
      })
      .join("");

    quoteSection.innerHTML = toRender;
  } catch (error) {
    console.log(error);
  }
};

generateQuote();
