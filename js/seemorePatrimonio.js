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
