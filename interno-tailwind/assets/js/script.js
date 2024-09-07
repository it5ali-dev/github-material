"use strict";

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav_menu");

// event listner
hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("nav-open");
});

// swiper
const swiper = new Swiper(".swiper", {
  lopp: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  //   breakpoint
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    960: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

// scroll reveal animation
