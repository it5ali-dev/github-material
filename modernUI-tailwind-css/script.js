"use strict";

// Mobile menu
const bars = document.querySelector("#bars");
const menu = document.querySelector("#menu");
const bar = document.querySelector(".fa-solid");
const hLinks = document.querySelectorAll(".hLink");

bars.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  bar.classList.toggle("fa-xmark");
});

// hLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     menu.classList.toggle("hidden");
//     bar.classList.toggle("fa-xmark");
//   });
// });
