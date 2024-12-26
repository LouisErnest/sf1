document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.header__burger');
    const list = document.querySelector('.header__nav-list');
    const nav = document.querySelector('.header__nav');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        list.classList.toggle('active');
        nav.classList.toggle('active');
    });
});