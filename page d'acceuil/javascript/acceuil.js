// script.js

// Fonction pour ouvrir une modale
function openModal(projetId) {
    var modal = document.getElementById('modal-' + projetId);
    if (modal) {
        modal.style.display = 'flex';
    }
}

// Fonction pour fermer une modale
function closeModal(projetId) {
    var modal = document.getElementById('modal-' + projetId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Fermer la modale lorsqu'on clique à l'extérieur de celle-ci
window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = 'none';
        }
    }
}
