const menuIcon = document.querySelector(".header .menu-icon");
const mobileNav = document.querySelector(".mobile-nav");
const closeButton = document.querySelector(".mobile-nav .close");
const aboutSliderEl = document.querySelector("#about-us-slider");

menuIcon.addEventListener("click", () => {
  mobileNav.classList.add("translate-x-0");
});

closeButton.addEventListener("click", () => {
  mobileNav.classList.remove("translate-x-0");
});

// Sliders
const aboutSlider = new Swiper("#about-us-slider", {
  pagination: {
    el: ".about-us-slider-controls",
    clickable: true,
  },
});

const howSlider = new Swiper("#how-slider", {
  breakpoints: {
    768: {
      slidesPerView: 2,
    },

    991: {
      slidesPerView: 3,
    },
  },

  pagination: {
    el: ".how-slider-controls",
    clickable: true,
  },
});
