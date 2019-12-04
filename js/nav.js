var menuBtn = document.getElementById("menuBtn");
var menuItems = document.getElementById("menuItems")
var menuContainer = document.getElementById("menuContainer");
var menu = document.getElementById("menu");
var menuLinks = document.getElementsByClassName("menuLink")
var nav = document.getElementById("nav");

var navColour = "white";

menuBtn.addEventListener("click", extendNav);
menuBtn.addEventListener("mouseenter", rotate);
menu.addEventListener("mouseleave", hideNav);

function rotate() {
    menu.style.transition = "0.6s";
    menu.style.backgroundColor = navColour;

    menuBtn.style.transform = "rotateZ(90deg)";
    menuBtn.style.transition = "0.6s";
}

function extendNav() {
    
    menuContainer.style.display = "flex";    
    menuContainer.style.transition = "1s";
    menuContainer.style.transitionDelay = "0.4s";
    

    menu.style.width = "100%";
    menu.style.transition = "1s";

    menuBtn.style.outline = "none";
}

function hideNav() {
    menuContainer.style.display = "none";
    menuContainer.style.transition = "1s";
    menuBtn.style.outline = "none";
    menuBtn.style.backgroundColor = "transparent";
    menuBtn.style.transform = "rotateZ(0deg)";
    menuBtn.style.transition = "0.6s";
    menuBtn.style.transitionDelay = "0.4s";

    menu.style.width = "60px";
    menu.style.backgroundColor = "transparent";
    menu.style.transition = "0.6s";



}