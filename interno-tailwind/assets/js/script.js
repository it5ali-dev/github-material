"use strict";

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav_menu");

// event listner
hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("nav-open");
});

// swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  //   breakpoint
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    960: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

// scroll reveal animation
const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 3000,
  delay: 600,
  reset: true,
});

// hero
sr.reveal(
  ".hero_text, .testimonial_title, .work_text, .news_text, .contact_container, .footer_copyright",
  {
    origin: "top",
  }
);

// steps
sr.reveal(
  ".steps_step, .swiper-slide, .brands_img, .stats_item, .news_item, .footer_item",
  {
    /*origin: "top",*/
    distance: "100px",
    interval: 100,
  }
);

// about
sr.reveal(".about_text, .work_item1", { origin: "left", delay: 150 });
sr.reveal(".about_img, .work_item2", { origin: "right", delay: 150 });

// testimonial
