document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const modal = document.getElementById(`modal-${card.getAttribute('onclick').split("'")[1]}`);
        modal.style.display = 'flex';
    });
});

document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        closeBtn.closest('.modal').style.display = 'none';
    });
});

window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});
