"use strict";

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav_menu");

// event listner
hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("nav-open");
});
