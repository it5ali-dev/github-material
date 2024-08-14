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
