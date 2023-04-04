window.addEventListener("DOMContentLoaded", navigator, false);
window.addEventListener("hashchange", navigator, false);

function navigator() {
  location.hash.startsWith("#ingenero")
    ? ingeneroPage()
    : location.hash.startsWith("#projectInvestigations")
    ? projectInvestigationsPage()
    : location.hash.startsWith("#testimonials")
    ? testimonialsPage()
    : location.hash.startsWith("#investigators")
    ? investigatorsPage()
    : location.hash.startsWith("#contact")
    ? contactPage()
    : homePage();
}

const API_QUOTES = "https://api.api-ninjas.com/v1/quotes?category=education";

//======Header======//
const buttonMenu = document.querySelector(".header__button");
const navMenu = document.querySelector(".header__nav");
const itemsMenu = [...document.querySelectorAll(".list__item")];
const body = document.querySelector("body");

//Toggle Menu
buttonMenu.addEventListener("click", () => {
  navMenu.classList.toggle("menu-visible");
  body.classList.toggle("body__hidden");
});

itemsMenu.forEach((item) => {
  item.addEventListener("click", () => {
    navMenu.classList.remove("menu-visible");
    body.classList.remove("body__hidden");
  });
});

//======Main nodes======//
const homeSection = document.querySelector("#home");
const carrouselSection = document.querySelector("#carrousel");
const ingeneroSection = document.querySelector("#ingenero");
const projectInvestigationsSection = document.querySelector(
  "#projectInvestigations"
);
const testimonialsSection = document.querySelector("#testimonials");
const investigatorsSection = document.querySelector("#investigators");
const contactSection = document.querySelector("#contact");

//======Home section======//
const slider = document.querySelector(".carrousel__img-photo");
const quoteSection = document.querySelector(".quote");

function homePage() {
  homeSection.classList.remove("inactive");
  carrouselSection.classList.remove("inactive");
  ingeneroSection.classList.add("inactive");
  projectInvestigationsSection.classList.add("inactive");
  testimonialsSection.classList.add("inactive");
  investigatorsSection.classList.add("inactive");
  contactSection.classList.add("inactive");

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
}

//======Ingenero page======//
function ingeneroPage() {
  homeSection.classList.add("inactive");
  carrouselSection.classList.add("inactive");
  ingeneroSection.classList.remove("inactive");
  ingeneroSection.classList.add("active");
  projectInvestigationsSection.classList.remove("active");
  projectInvestigationsSection.classList.add("inactive");
  testimonialsSection.classList.remove("active");
  testimonialsSection.classList.add("inactive");
  investigatorsSection.classList.remove("active");
  investigatorsSection.classList.add("inactive");
  contactSection.classList.remove("active");
  contactSection.classList.add("inactive");
}

//======projectInvestigations page======//
function projectInvestigationsPage() {
  homeSection.classList.add("inactive");
  carrouselSection.classList.add("inactive");
  ingeneroSection.classList.add("inactive");
  ingeneroSection.classList.remove("active");
  projectInvestigationsSection.classList.add("active");
  projectInvestigationsSection.classList.remove("inactive");
  testimonialsSection.classList.remove("active");
  testimonialsSection.classList.add("inactive");
  investigatorsSection.classList.remove("active");
  investigatorsSection.classList.add("inactive");
  contactSection.classList.remove("active");
  contactSection.classList.add("inactive");
}

//======Testimonials page======//
function testimonialsPage() {
  homeSection.classList.add("inactive");
  carrouselSection.classList.add("inactive");
  ingeneroSection.classList.add("inactive");
  ingeneroSection.classList.remove("active");
  projectInvestigationsSection.classList.remove("active");
  projectInvestigationsSection.classList.add("inactive");
  testimonialsSection.classList.add("active");
  testimonialsSection.classList.remove("inactive");
  investigatorsSection.classList.remove("active");
  investigatorsSection.classList.add("inactive");
  contactSection.classList.remove("active");
  contactSection.classList.add("inactive");
}

//======Investigators page======//
function investigatorsPage() {
  homeSection.classList.add("inactive");
  carrouselSection.classList.add("inactive");
  ingeneroSection.classList.add("inactive");
  ingeneroSection.classList.remove("active");
  projectInvestigationsSection.classList.remove("active");
  projectInvestigationsSection.classList.add("inactive");
  testimonialsSection.classList.remove("active");
  testimonialsSection.classList.add("inactive");
  investigatorsSection.classList.add("active");
  investigatorsSection.classList.remove("inactive");
  contactSection.classList.remove("active");
  contactSection.classList.add("inactive");
}

//======Contact page======//
const listContact = document.querySelector(".list__contact");
const joinButton = document.querySelector(".about__text-button");

function contactPage() {
  homeSection.classList.add("inactive");
  carrouselSection.classList.add("inactive");
  ingeneroSection.classList.add("inactive");
  ingeneroSection.classList.remove("active");
  projectInvestigationsSection.classList.remove("active");
  projectInvestigationsSection.classList.add("inactive");
  testimonialsSection.classList.remove("active");
  testimonialsSection.classList.add("inactive");
  investigatorsSection.classList.remove("active");
  investigatorsSection.classList.add("inactive");
  contactSection.classList.add("active");
  contactSection.classList.remove("inactive");

  //Send Form
  const form = document.querySelector("#form");

  form.addEventListener("submit", infoSubmit);
  async function infoSubmit(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const response = await fetch(this.action, {
      method: this.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      this.reset();
      alert("Gracias por tú mensaje");
    }
  }
}
