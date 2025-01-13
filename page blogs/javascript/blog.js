// Fonction pour filtrer les articles en fonction de la catégorie sélectionnée
function filterPosts() {
    const filterValue = document.getElementById('category-filter').value;
    const articles = document.querySelectorAll('#blog-articles .article');

    articles.forEach(article => {
        if (filterValue === 'all') {
            article.style.display = 'block';  // Affiche tous les articles
        } else {
            // Affiche uniquement les articles dont la catégorie correspond
            if (article.getAttribute('data-category') === filterValue) {
                article.style.display = 'block';
            } else {
                article.style.display = 'none';
            }
        }
    });
}
