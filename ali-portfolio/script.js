"use strict";

// Service toggle
const serviceBtn = document.querySelectorAll(".service_item");
const serviceDetails = document.querySelector(".services_right");
const categories = document.querySelectorAll(".projects_categories li");

const getService = (category) => {
  const details = servicesData.find((item) => item.category === category);
  serviceDetails.innerHTML = `
    <h3>${details.title}</h3>
    ${details.description.map((para) => "<p>" + para + "</p>").join("")}
  `;
};

const removeActive = () => {
  serviceBtn.forEach((btn) => {
    btn.classList.remove("active");
  });
};

serviceBtn.forEach((item) => {
  item.addEventListener("click", () => {
    removeActive();
    const serviceClass = item.classList[1];
    getService(serviceClass);

    item.classList.add("active");
  });
});

getService("frontend");

// Projects
const removeActiveClass = () => {
  categories.forEach((category) => {
    category.classList.remove("active");
  });
};

categories.forEach((category) => {
  category.addEventListener("click", () => {
    removeActiveClass();
    category.classList.add("active");
  });
});

const containerEl = document.querySelector(".projects_container");
var mixer = mixitup(containerEl, {
  animation: {
    enable: false,
  },
});

mixer.filter("*");

// Testimonial
const swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 1,

  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
