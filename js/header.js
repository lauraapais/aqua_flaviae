var menuIcon = document.getElementById("menuIcon");
var menuItems = document.getElementById("menuItems");
var closeMenu = document.getElementById("closeMenuDesktop");
var openMenu = document.getElementById("openMenuDesktop");

openMenu.addEventListener("click", function () {
    menuItems.classList.add("show");
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
});

closeMenu.addEventListener("click", function () {
    menuItems.classList.remove("show");
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
});