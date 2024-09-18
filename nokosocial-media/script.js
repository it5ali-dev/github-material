"use strict";

// sidebar
const menuItems = document.querySelectorAll(".menu-item");

// Message
const messageNoti = document.querySelector("#message-notification");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

// Theme
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");
const colors = document.querySelectorAll(".choose-color span");
const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");

// Side-Bar
// remove active class from all items
const removeActive = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    removeActive();
    item.classList.add("active");

    if (item.id != "notifications") {
      document.querySelector(".notification-popup").style.display = "none";

      //   document.querySelector(
      //     "#notifications .notification-count"
      //   ).style.display = "inline-block";
    } else {
      document.querySelector(".notification-popup").style.display = "block";
      document.querySelector(
        "#notifications .notification-count"
      ).style.display = "none";
    }
  });
});

// Messages
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();

  message.forEach((user) => {
    let name = user.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      user.style.display = "flex";
    } else {
      user.style.display = "none";
    }
  });
};

// Search chat
messageSearch.addEventListener("keyup", searchMessage);

// Highlight message when clicked
messageNoti.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";

  messageNoti.querySelector(".notification-count").style.display = "none";

  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});

// Theme / Display Customization

// Open Theme Modal
const openThemeModal = () => {
  themeModal.style.display = "grid";
};

// Close Modal
const closeThemeModal = (event) => {
  if (event.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};

themeModal.addEventListener("click", closeThemeModal);

theme.addEventListener("click", openThemeModal);

// Font Size

// remove active class from span of font size
const removeSizeActive = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};

// Change font size here
fontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    removeSizeActive();
    let fontSize;
    size.classList.toggle("active");

    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("--sticky-top-left", "-2rem");
      root.style.setProperty("--sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty("--sticky-top-left", "-5rem");
      root.style.setProperty("--sticky-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "22px";
      root.style.setProperty("--sticky-top-left", "-12rem");
      root.style.setProperty("--sticky-top-right", "-35rem");
    }

    //   Change font size
    document.querySelector("html").style.fontSize = fontSize;
  });
});

// Remove Active from Colors
const RemoveActiveColor = () => {
  colors.forEach((color) => {
    color.classList.remove("active");
  });
};

// Change colors
colors.forEach((color) => {
  color.addEventListener("click", () => {
    RemoveActiveColor();
    let primaryHue;

    if (color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 202;
    }

    color.classList.add("active");
    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});

// Theme Background Values
let lightLightness;
let whiteLightness;
let darkLightness;

// Change BG Func
const changeBG = () => {
  root.style.setProperty("--light-color-lightness", lightLightness);
  root.style.setProperty("--white-color-lightness", whiteLightness);
  root.style.setProperty("--dark-color-lightness", darkLightness);
};

bg1.addEventListener("click", () => {
  darkLightness = "17%";
  whiteLightness = "100%";
  lightLightness = "95%";

  bg1.classList.add("active");

  bg2.classList.remove("active");
  bg3.classList.remove("active");

  changeBG();

  //   window.location.reload();
});

bg2.addEventListener("click", () => {
  darkLightness = "95%";
  whiteLightness = "20%";
  lightLightness = "15%";

  bg2.classList.add("active");

  bg1.classList.remove("active");
  bg3.classList.remove("active");

  changeBG();
});

bg3.addEventListener("click", () => {
  darkLightness = "95%";
  whiteLightness = "10%";
  lightLightness = "0%";

  bg3.classList.add("active");

  bg1.classList.remove("active");
  bg2.classList.remove("active");

  changeBG();
});
