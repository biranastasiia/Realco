'use strict'

document.querySelector('.top-link__icon').addEventListener('click', function () {
    document.querySelector('.top-link').classList.add('hidden');
})

document.addEventListener('scroll', () => {
    const windowPositionTop = window.scrollY;
    if (windowPositionTop > 100) {
        document.querySelector('.header').classList.add('fixed');
    } else {
        document.querySelector('.header').classList.remove('fixed');
    }
})

document.querySelector('.menu-burger-icon').addEventListener('click', function () {
    document.querySelector('.menu').classList.add('open');
})

document.querySelector('.menu-close-icon').addEventListener('click', function () {
    document.querySelector('.menu').classList.remove('open');
})

const footerNavigationTitle = document.querySelectorAll('.footer-navigation__title');
footerNavigationTitle.forEach(title => title.addEventListener('click', function (e) {
    e.target.parentNode.classList.toggle('open');
}))