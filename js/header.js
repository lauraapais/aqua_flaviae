var menuIcon = document.getElementById("menuIcon");
var menuItems = document.getElementById("menuItems");
var closeMenu = document.getElementById("closeMenu");
var openMenu = document.getElementById("openMenu");

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


/*
let totalRotation = 0;

document.addEventListener('scroll', () => {
    var logo = document.getElementById('logoPart1');
    var scrollDelta = window.scrollY - lastScrollY; 
    totalRotation += scrollDelta; 
    logo.style.transform = `rotate(${totalRotation}deg)`;
    lastScrollY = window.scrollY;
});

let lastScrollY = window.scrollY;
*/
