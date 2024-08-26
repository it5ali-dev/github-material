// Toggle button
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("left-[0]");
  hamburger.classList.toggle("ri-close-large-line");
});

navLink.forEach((link) => {
  link.addEventListener("click", function () {
    navMenu.classList.toggle("left-[0]");
    hamburger.classList.toggle("ri-close-large-line");
  });
});

// Scroll Up

const scrollUp = function () {
  const scrollUpBtn = document.getElementById("scroll-up");

  if (this.scrollY >= 250) {
    scrollUpBtn.classList.remove("-bottom-1/2");
    scrollUpBtn.classList.add("bottom-10");
  } else {
    scrollUpBtn.classList.add("-bottom-1/2");
    scrollUpBtn.classList.remove("bottom-10");
  }
};

window.addEventListener("scroll", scrollUp);

// scroll section active links

const activeLink = function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "hero";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (this.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((item) => {
    item.classList.remove("active");
    if (item.href.includes(current)) {
      item.classList.add("active");
    }
  });
};

window.addEventListener("scroll", activeLink);

// scroll reveal Animation
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 300,
  reset: true,
});

sr.reveal(
  `.hero__big-text, .collection__top, .popular__top, .about__top, .footer__content`
);

sr.reveal(`.hero__image`, { origin: "bottom", delay: 500 });
sr.reveal(`.hero__content, .popular__card-3`, { origin: "bottom", delay: 700 });

sr.reveal(`.collection__card, .banner__content`, { interval: 100 });

sr.reveal(`.popular__card-1, .about__image`, { origin: "left" });
sr.reveal(`.popular__card-2, .about__content`, { origin: "right" });
