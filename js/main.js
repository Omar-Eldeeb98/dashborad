const sideMenu = document.querySelector("aside");
const menuButton = document.querySelector("#menu-btn");
const closeButton = document.querySelector("#close-btn");
const themeSwitcher = document.querySelector(".theme-switcher");

menuButton.addEventListener("click", () => {
  sideMenu.style.display = "block";
});
closeButton.addEventListener("click", () => {
  sideMenu.style.display = "none";
});
themeSwitcher.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeSwitcher.querySelector("span:nth-child(1)").classList.toggle("active");
  themeSwitcher.querySelector("span:nth-child(2)").classList.toggle("active");
});
