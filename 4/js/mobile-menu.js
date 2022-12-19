const mainNavToggle = document.querySelector(".main-nav__toggle");
const mainNavWrapper = document.querySelector(".main-nav__wrapper");
const mainNavWrapperOpened = document.querySelector(".main-nav__wrapper--opened");


window.onload = function () {
  mainNavWrapper.classList.remove("main-nav__wrapper--opened");
}

mainNavToggle.onclick = function () {
  mainNavWrapper.classList.toggle("main-nav__wrapper--opened");
}
