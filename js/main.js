const menuIcon = document.querySelector(".header .menu-icon");
const mobileNav = document.querySelector(".mobile-nav");
const closeButton = document.querySelector(".mobile-nav .close");
const aboutSliderEl = document.querySelector("#about-us-slider");
const countElements = document.querySelectorAll(".achievements .count");
const accordion = document.querySelector(".faq .accordion");

menuIcon.addEventListener("click", () => {
  mobileNav.style.transform = "translateX(0)";
});

closeButton.addEventListener("click", () => {
  mobileNav.style.transform = "translateX(100%)";
});

// Animate count elements on scroll
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const countEl = entry.target;
      const targetCount = +countEl.getAttribute("data-count");
      const increment = Math.ceil(targetCount / 100);
      let currentCount = 0;

      const updateCount = () => {
        if (currentCount < targetCount) {
          currentCount += increment;
          countEl.innerText = currentCount;
          setTimeout(updateCount, 10);
        } else {
          countEl.innerText = targetCount;
        }
      };

      updateCount();

      observer.unobserve(countEl);
    }
  });
});

countElements.forEach((countEl) => {
  observer.observe(countEl);
});

// Accordion
accordion.addEventListener("click", (e) => {
  const target = e.target.closest(".accordion .item-btn");
  if (!target) return;

  const lastActive = accordion.querySelector(".item.active");

  lastActive &&
    lastActive !== target.parentElement &&
    lastActive.classList.remove("active");
  target.parentElement.classList.toggle("active");
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

const partnersSlider = new Swiper("#partners-slider", {
  slidesPerView: 2,

  breakpoints: {
    768: {
      slidesPerView: 3,
    },

    991: {
      slidesPerView: 4,
    },

    1200: {
      slidesPerView: 5,
    },
  },

  pagination: {
    el: ".partners-slider-controls",
    clickable: true,
  },
});

const threeDSlider = new Swiper("#three-d-slider", {
  autoplay: {
    delay: 8000,
  },

  navigation: {
    nextEl: "#three-d-slider .slider-buttons .next",
    prevEl: "#three-d-slider .slider-buttons .prev",
  },
});

const testimonialsSlider = new Swiper("#testimonials-slider", {
  pagination: {
    el: ".testimonials-slider-controls",
    clickable: true,
  },
});
