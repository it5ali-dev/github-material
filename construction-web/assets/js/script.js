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

// Scroll Up
const scrollUp = function () {
  const scrollUp = document.getElementById("scroll-up");

  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

// scroll section Active Link
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        ".nav_menu a[href*=" + sectionId + "]"
      );
    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

// scroll animation
// scroll reveal Animation
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 300,
  reset: true,
});

sr.reveal(`.services_data, .content, .footer_container`);

sr.reveal(`.footer_copy`, { origin: "bottom", delay: 500 });
sr.reveal(``, { origin: "bottom", delay: 700 });

sr.reveal(`.services_card, .projects_card`, { interval: 150 });

sr.reveal(`.home_content, .about_images, .contact_img`, { origin: "left" });
sr.reveal(`.home_images, .about_data, .contact_data`, { origin: "right" });
