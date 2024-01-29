const menuBtn = document.querySelector('.header__menu-btn--inactive');
const menu = document.querySelector('.header__menu');
const closeMenuBtn = document.querySelector('.header__menu-btn--active');

function toggleMenu() {
    menu.classList.toggle('active');
    closeMenuBtn.classList.toggle('active');
    menuBtn.classList.toggle('active');
}

menuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);