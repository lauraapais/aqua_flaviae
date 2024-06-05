var menuIcon = document.getElementById("menuIconDesktop");
var menuItems = document.getElementById("menuItemsDesktop");
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


const logoHeader = document.getElementById('logoEstatico');
const footer = document.getElementById('footer');

function checkOverlap() {
    const logoRect = logoHeader.getBoundingClientRect();
    const footerRect = footer.getBoundingClientRect();

    if (logoRect.bottom > footerRect.top && logoRect.top < footerRect.bottom) {
        logoHeader.classList.add('logoDifferent');
    } else {
        logoHeader.classList.remove('logoDifferent');
    }
}

window.addEventListener('scroll', checkOverlap);
window.addEventListener('resize', checkOverlap);
checkOverlap();



const menuIconMobile = document.getElementById('menuIconMobile');
const menuMobile = document.querySelector('.menuMobile');
const closeMenuMobile = document.getElementById('closeMenuMobile');

menuIconMobile.addEventListener('click', () => {
    menuMobile.classList.add('active');
    document.body.classList.add('lock');
});

closeMenuMobile.addEventListener('click', () => {
    menuMobile.classList.remove('active');
    if(document.body.classList.contains('lock'))
        document.body.classList.remove('lock');
});


window.addEventListener('resize', function(event) {
    console.log("teste");
    if(this.innerWidth<900) menuLock();
}, true);

function menuLock() {
    if(document.body.classList.contains('lock'))
        document.body.classList.remove('lock');
}