function toggleButtons(categoryId) {
    const categoryDiv = document.getElementById(categoryId);
    if (categoryDiv.classList.contains('hidden')) {
        categoryDiv.classList.remove('hidden');
        categoryDiv.classList.add('shown');
    } else {
        categoryDiv.classList.remove('shown');
        categoryDiv.classList.add('hidden');
    }
}
