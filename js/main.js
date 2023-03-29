const menuIcon = document.querySelector(".header .menu-icon");
const mobileNav = document.querySelector(".mobile-nav");
const closeButton = document.querySelector(".mobile-nav .close");

menuIcon.addEventListener("click", () => {
  mobileNav.classList.add("translate-x-0");
});

closeButton.addEventListener("click", () => {
  mobileNav.classList.remove("translate-x-0");
});
