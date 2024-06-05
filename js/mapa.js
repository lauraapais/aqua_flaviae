// Função para ocultar todas as informações
function hideAllInfo() {
    document.querySelectorAll('.infoEllipse').forEach(function(info) {
        info.style.display = 'none';
    });
}

// Adicionar evento de clique para ellipseTermas
document.getElementById('ellipseTermas').addEventListener('click', function () {
    const info = document.getElementById('infoEllipseTermas');
    // Se a informação estiver visível, ocultá-la
    if (info.style.display === 'block') {
        info.style.display = 'none';
    } else {
        // Ocultar todas as outras informações e mostrar a clicada
        hideAllInfo();
        info.style.display = 'block';
    }
});

// Adicionar evento de clique para ellipsePonte
document.getElementById('ellipsePonte').addEventListener('click', function () {
    const info = document.getElementById('infoEllipsePonte');
    // Se a informação estiver visível, ocultá-la
    if (info.style.display === 'block') {
        info.style.display = 'none';
    } else {
        // Ocultar todas as outras informações e mostrar a clicada
        hideAllInfo();
        info.style.display = 'block';
    }
});
