// Show menu
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// Menu Show
if (navToggle) {
  navToggle.addEventListener("click", function () {
    navMenu.classList.add("show-menu");
  });
}

// Menu Hidden
if (navClose) {
  navClose.addEventListener("click", function () {
    navMenu.classList.remove("show-menu");
  });
}

// remove menu Mobile
const navLink = document.querySelectorAll(".nav_link");

const linkAction = function () {
  const navMenu = document.getElementById("nav-menu");
  //   when we click on each nav-link show-menu class will be removed
  navMenu.classList.remove("show-menu");
};

navLink.forEach((link) => {
  link.addEventListener("click", linkAction);
});

// change background header
const bgHeader = () => {
  const header = document.getElementById("header");
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", bgHeader);
bgHeader();

// Swiper services
const swiperServices = new Swiper(".services_swiper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 24,
  slidesPerView: "auto",

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
