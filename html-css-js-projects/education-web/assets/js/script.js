"use strict";

// change nav background color on scroll
window.addEventListener("scroll", function () {
  // menuBtn.style.display = "none";
  this.document
    .querySelector("nav")
    .classList.toggle("window-scroll", this.window.scrollY > 0);
});

// hide / show faq answer
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    // change icon
    const icon = faq.querySelector(".faq_icon i");
    if (icon.className === "ri-add-line") {
      icon.className = "ri-subtract-line";
    } else {
      icon.className = "ri-add-line";
    }
  });
});

// Swiper testimonials
const swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  //   breakpoint
  slidesPerView: 2,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    960: {
      slidesPerView: 2,
    },
  },
});

// hamburger
const menu = document.querySelector(".nav_menu");
const lists = document.querySelectorAll(".nav_menu ul li");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

const closeNav = () => {
  menu.style.display = "none";
  menuBtn.style.display = "inline-block";
  closeBtn.style.display = "none";
};

closeBtn.addEventListener("click", closeNav);

// lists.forEach((list) => {
//   list.addEventListener("click", closeNav);
// });
