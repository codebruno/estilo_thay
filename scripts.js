// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const prevButtons = document.querySelectorAll('.slide-prev');
    const nextButtons = document.querySelectorAll('.slide-next');
    const productContainers = document.querySelectorAll('.products');

    prevButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            productContainers[index].scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        });
    });

    nextButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            productContainers[index].scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        });
    });
});