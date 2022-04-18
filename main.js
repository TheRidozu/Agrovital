window.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".header__hamburger-btn");
  const menuList = document.querySelector(".nav__list");
  const infoBtn = document.querySelector(".header__info-btn");
  const topbarList = document.querySelector(".topbar__list");

  infoBtn.addEventListener("click", () => {
    if (!menuList.classList.contains("nav__list--hidden")) {
      menuList.classList.add("nav__list--hidden");
    }
    topbarList.classList.toggle("topbar__list--hidden");
  });
  menuBtn.addEventListener("click", () => {
    if (!topbarList.classList.contains("topbar__list--hidden")) {
      topbarList.classList.add("topbar__list--hidden");
    }
    menuList.classList.toggle("nav__list--hidden");
  });
});
