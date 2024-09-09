"use strict";

// change nav background color on scroll
window.addEventListener("scroll", function () {
  this.document
    .querySelector("nav")
    .classList.toggle("window-scroll", this.window.scrollY > 0);
});

// hide / show faq answer
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    // change icon
    const icon = faq.querySelector(".faq_icon i");
    if (icon.className === "ri-add-line") {
      icon.className = "ri-subtract-line";
    } else {
      icon.className = "ri-add-line";
    }
  });
});
