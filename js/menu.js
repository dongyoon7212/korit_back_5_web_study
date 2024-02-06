const menuButton = document.querySelector(".menu-button");
const sideBar = document.querySelector(".side-bar-layout");
const menu = document.querySelector(".side-bar-container");

menuButton.onclick = () => {
    sideBar.classList.add("side-bar-is-show");
    menu.classList.add("side-bar-container-show");
};

const closeButton = document.querySelector(".side-bar-close-button");

closeButton.onclick = () => {
    sideBar.classList.remove("side-bar-is-show");
    menu.classList.remove("side-bar-container-show");
};

sideBar.onclick = () => {
    sideBar.classList.remove("side-bar-is-show");
    menu.classList.remove("side-bar-container-show");
};
