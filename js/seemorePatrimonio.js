var seeMore_Ninfeu = document.getElementById("seeMore_Ninfeu");
var seeLess_Ninfeu = document.getElementById("seeLess_Ninfeu");
var hidden_Ninfeu = document.getElementById("hidden_Ninfeu");

seeMore_Ninfeu.addEventListener("click", function () {
    hidden_Ninfeu.classList.add("open");
    var contentHeight = hidden_Ninfeu.scrollHeight + "px";
    hidden_Ninfeu.classList.remove("open");

    hidden_Ninfeu.style.maxHeight = contentHeight;
    hidden_Ninfeu.classList.add("open");

    seeMore_Ninfeu.style.display = "none";
    seeLess_Ninfeu.style.display = "block";
});

seeLess_Ninfeu.addEventListener("click", function () {
    hidden_Ninfeu.style.maxHeight = "0"; 
    hidden_Ninfeu.classList.remove("open");

    seeMore_Ninfeu.style.display = "block";
    seeLess_Ninfeu.style.display = "none";
});






var seeMore_Ponte = document.getElementById("seeMore_Ponte");
var seeLess_Ponte = document.getElementById("seeLess_Ponte");
var hidden_Ponte = document.getElementById("hidden_Ponte");

seeMore_Ponte.addEventListener("click", function () {
    hidden_Ponte.classList.add("open");
    var contentHeight = hidden_Ponte.scrollHeight + "px";
    hidden_Ponte.classList.remove("open");

    hidden_Ponte.style.maxHeight = contentHeight;
    hidden_Ponte.classList.add("open");

    seeMore_Ponte.style.display = "none";
    seeLess_Ponte.style.display = "block";
});

seeLess_Ponte.addEventListener("click", function () {
    hidden_Ponte.style.maxHeight = "0"; 
    hidden_Ponte.classList.remove("open");
    
    seeMore_Ponte.style.display = "block";
    seeLess_Ponte.style.display = "none";
});






var seeMore_Hidraul = document.getElementById("seeMore_Hidraul");
var seeLess_Hidraul = document.getElementById("seeLess_Hidraul");
var hidden_Hidraul = document.getElementById("hidden_Hidraul");

seeMore_Hidraul.addEventListener("click", function () {
    hidden_Hidraul.classList.add("open");
    var contentHeight = hidden_Hidraul.scrollHeight + "px";
    hidden_Hidraul.classList.remove("open");

    hidden_Hidraul.style.maxHeight = contentHeight;
    hidden_Hidraul.classList.add("open");

    seeMore_Hidraul.style.display = "none";
    seeLess_Hidraul.style.display = "block";
});

seeLess_Hidraul.addEventListener("click", function () {
    hidden_Hidraul.style.maxHeight = "0"; 
    hidden_Hidraul.classList.remove("open");
    
    seeMore_Hidraul.style.display = "block";
    seeLess_Hidraul.style.display = "none";
});





var seeMore_Escombros = document.getElementById("seeMore_Escombros");
var seeLess_Escombros = document.getElementById("seeLess_Escombros");
var hidden_Escombros = document.getElementById("hidden_Escombros");

seeMore_Escombros.addEventListener("click", function () {
    hidden_Escombros.classList.add("open");
    var contentHeight = hidden_Escombros.scrollHeight + "px";
    hidden_Escombros.classList.remove("open");

    hidden_Escombros.style.maxHeight = contentHeight;
    hidden_Escombros.classList.add("open");

    seeMore_Escombros.style.display = "none";
    seeLess_Escombros.style.display = "block";
});

seeLess_Escombros.addEventListener("click", function () {
    hidden_Escombros.style.maxHeight = "0"; 
    hidden_Escombros.classList.remove("open");
    
    seeMore_Escombros.style.display = "block";
    seeLess_Escombros.style.display = "none";
});

