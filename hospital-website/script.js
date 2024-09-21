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
