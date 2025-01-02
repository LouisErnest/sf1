document.addEventListener('DOMContentLoaded', function() {
    const headerBurger = document.querySelector('.header__burger');
    const headerList = document.querySelector('.header__nav-list');
    const headerNav = document.querySelector('.header__nav');
    const projectsLinks = document.querySelectorAll('.projects__link');
    const projectsImage = document.querySelector('.projects__image');
    const projectsIndicators = document.querySelectorAll('.projects__ind');
    const leftProjectsArrow = document.querySelector('.projects__left-arrow');
    const rightProjectsArrow = document.querySelector('.projects__right-arrow');
    const leftProjectsButton = document.querySelector('.projects__img-btn-left');
    const rightProjectsButton = document.querySelector('.projects__img-btn-right');

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
        projectsIndicators.forEach((indicator, i) => {
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

    leftProjectsArrow.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : projectsLinks.length - 1;
        updateActiveElements(currentIndex);
    });

    rightProjectsArrow.addEventListener('click', function() {
        currentIndex = (currentIndex < projectsLinks.length - 1) ? currentIndex + 1 : 0;
        updateActiveElements(currentIndex);
    });

    leftProjectsButton.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : projectsLinks.length - 1;
        updateActiveElements(currentIndex);
    });

    rightProjectsButton.addEventListener('click', function() {
        currentIndex = (currentIndex < projectsLinks.length - 1) ? currentIndex + 1 : 0;
        updateActiveElements(currentIndex);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.querySelector('.control__video-overlay');
    overlay.addEventListener('click', playVideo);
});

function playVideo() {
    const video = document.querySelector('.control__video-player');
    const overlay = document.querySelector('.control__video-overlay');
    video.play();
    overlay.style.display = 'none';
}