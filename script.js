document.addEventListener('DOMContentLoaded', function() {
    const headerBurger = document.querySelector('.header__burger');
    const headerList = document.querySelector('.header__nav-list');
    const headerNav = document.querySelector('.header__nav');
    const projectsLinks = document.querySelectorAll('.projects__link');
    const projectsImage = document.querySelector('.projects__image');
    const indicators = document.querySelectorAll('.projects__ind');
    const leftArrow = document.querySelector('.projects__left-arrow');
    const rightArrow = document.querySelector('.projects__right-arrow');

    let currentIndex = 0;

    headerBurger.addEventListener('click', () => {
        headerBurger.classList.toggle('burger_active');
        headerList.classList.toggle('burger_active');
        headerNav.classList.toggle('burger_active');
    });

    const updateActiveElements = (index) => {
        // Обновляем активные ссылки
        projectsLinks.forEach((link, i) => {
            if (i === index) {
                link.classList.add('projects_active');
            } else {
                link.classList.remove('projects_active');
            }
        });

        // Обновляем изображение
        switch (index) {
            case 0:
                projectsImage.style.backgroundImage = 'url("images/png/projects-img1.png")';
                break;
            case 1:
                projectsImage.style.backgroundImage = 'url("images/png/projects-img2.png")';
                break;
            case 2:
                projectsImage.style.backgroundImage = 'url("images/png/projects-img3.png")';
                break;
        }

        // Обновляем индикаторы
        indicators.forEach((indicator, i) => {
            if (i === index) {
                indicator.classList.add('projects_active');
            } else {
                indicator.classList.remove('projects_active');
            }
        });
    };

    projectsLinks.forEach((link, index) => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            currentIndex = index;
            updateActiveElements(currentIndex);
        });
    });

    leftArrow.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : projectsLinks.length - 1;
        updateActiveElements(currentIndex);
    });

    rightArrow.addEventListener('click', function() {
        currentIndex = (currentIndex < projectsLinks.length - 1) ? currentIndex + 1 : 0;
        updateActiveElements(currentIndex);
    });
});