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



    // Seleciona o ícone do menu e o menu mobile
const menuIconMobile = document.getElementById('menuIconMobile');
const menuMobile = document.querySelector('.menuMobile');
const closeMenuMobile = document.getElementById('closeMenuMobile');

// Adiciona o evento de clique para abrir o menu mobile
menuIconMobile.addEventListener('click', () => {
    menuMobile.classList.add('active');
});

// Adiciona o evento de clique para fechar o menu mobile
closeMenuMobile.addEventListener('click', () => {
    menuMobile.classList.remove('active');
});
