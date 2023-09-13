// Navigation functionality
function setupGridNavigation() {
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach((gridItem) => {
        gridItem.addEventListener('click', () => {
            const page = gridItem.getAttribute('data-page');
            window.location.href = `${page}.html`;
        });
    });
}

// Call the functions when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    setupGridNavigation();
    setupToggleableSection();
});
