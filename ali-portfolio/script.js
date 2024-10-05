"use strict";

// Blur Effect
const loadText = document.querySelector(".load");
const bg = document.querySelector(".bg");

let load = 0;

const blurring = () => {
  load++;
  if (load > 99) {
    clearInterval(int);
    bg.classList.remove("bg"); // Remove the .bg class when load is 100
  }
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
};

// For reference: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

let int = setInterval(blurring, 15);

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
    678: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Nav Toggle
const navMenu = document.querySelector(".nav_menu");
const navMenuList = document.querySelectorAll(".nav_menu li");
const navOpen = document.querySelector(".nav_open");
const navClose = document.querySelector(".nav_close");

const openNav = () => {
  navMenu.style.right = "0";
  navOpen.style.display = "none";
  navClose.style.display = "inline-block";
};

const closeNav = () => {
  navMenu.style.right = "-15rem";
  navOpen.style.display = "inline-block";
  navClose.style.display = "none";
};

navMenuList.forEach((item) => {
  item.addEventListener("click", closeNav);
});

navOpen.addEventListener("click", openNav);
navClose.addEventListener("click", closeNav);

// theme toggle
const themeBtn = document.querySelector(".nav_theme");

themeBtn.addEventListener("click", () => {
  let bodyClass = document.body.className;
  if (!bodyClass) {
    bodyClass = "dark";
    document.body.className = bodyClass;
    // change toggle icon
    themeBtn.innerHTML = "<i class='ri-sun-line'></i>";
    // save theme local storage
    window.localStorage.setItem("theme", bodyClass);
  } else {
    bodyClass = "";
    document.body.className = bodyClass;
    // change toggle icon
    themeBtn.innerHTML = "<i class='ri-moon-fill'></i>";
    // save theme local storage
    window.localStorage.setItem("theme", bodyClass);
  }
});

// onload theme
window.addEventListener("load", () => {
  document.body.className = window.localStorage.getItem("theme");
});
