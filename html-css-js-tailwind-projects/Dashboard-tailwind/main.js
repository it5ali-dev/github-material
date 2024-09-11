"use strict";

const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");
const menu = document.querySelector(".left_small");

const addClasses = () => {
  menu.classList.add("left-0");
  hamburger.classList.add("hidden");
  close.classList.remove("hidden");
};

const removeClasses = () => {
  menu.classList.remove("left-0");
  hamburger.classList.remove("hidden");
  close.classList.add("hidden");
};

hamburger.addEventListener("click", addClasses);
close.addEventListener("click", removeClasses);
