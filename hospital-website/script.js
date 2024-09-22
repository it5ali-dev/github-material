"use strict";

const items = document.getElementById("nav_items");
const openNav = document.querySelector("#openNav");
const closeNav = document.querySelector("#closeNav");

console.log();

openNav.addEventListener("click", () => {
  items.style.display = "flex";
  openNav.style.display = "none";
  closeNav.style.display = "inline-block";
});

const closeMenu = () => {
  items.style.display = "none";
  closeNav.style.display = "none";
  openNav.style.display = "inline-block";
};

closeNav.addEventListener("click", closeMenu);

// Close nan menu when menu item is clicked
if (window.innerWidth < 1024) {
  document.querySelectorAll("#nav_items  li a").forEach((navItem) => {
    navItem.addEventListener("click", closeMenu);
  });
}

// Change navbar color
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

// Swiper JS
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
