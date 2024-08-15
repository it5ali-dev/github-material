"use strict";

// navbar
const navbar = document.querySelector("header");

window.onscroll = () => {
  if (window.scrollY > 100) {
    navbar.classList.add("bg-primary-dark");
    navbar.classList.add("border-b");
    navbar.classList.add("border-gray");
  } else {
    navbar.classList.remove("bg-primary-dark");
    navbar.classList.remove("border-b");
    navbar.classList.remove("border-gray");
  }
};

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

// testimonials
const userTexts = document.querySelectorAll(".user-text");
const userPics = document.querySelectorAll(".user-pic");

function ShowReview() {
  for (let userPic of userPics) {
    userPic.classList.remove("active-pic");
  }
  for (let userText of userTexts) {
    userText.classList.remove("active-text");
  }

  let i = Array.from(userPics).indexOf(event.target);
  userPics[i].classList.add("active-pic");
  userTexts[i].classList.add("active-text");
}

const toggleBtn = document.getElementById("toggleBtn");

const cardFront1 = document.querySelector("#card-1-front");
const cardBack1 = document.querySelector("#card-1-back");
const cardFront2 = document.querySelector("#card-2-front");
const cardBack2 = document.querySelector("#card-2-back");
const cardFront3 = document.querySelector("#card-3-front");
const cardBack3 = document.querySelector("#card-3-back");
// const front = document.querySelector(".front");
// const back = document.querySelector(".back");

toggleBtn.addEventListener("change", () => {
  cardFront1.classList.toggle("-rotate-y-180");
  cardFront1.classList.toggle("hidden");
  cardBack1.classList.toggle("rotate-y-180");

  cardFront2.classList.toggle("-rotate-y-180");
  cardFront2.classList.toggle("hidden");
  cardBack2.classList.toggle("rotate-y-180");

  cardFront3.classList.toggle("-rotate-y-180");
  cardFront3.classList.toggle("hidden");
  cardBack3.classList.toggle("rotate-y-180");
});
