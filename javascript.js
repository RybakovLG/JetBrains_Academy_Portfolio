// PORTFOLIO BUTTONS

document
    .querySelectorAll('.open-window')
    .forEach(button => button.addEventListener('click', () => document.querySelector('.window').style.display='flex'));

document
    .querySelectorAll('.close-window')
    .forEach(button => button.addEventListener('click', () => document.querySelector('.window').style.display='none'));


// MENU BURGER

let menuBtn = document.querySelector('.hamburger__btn'),
    iconMenu = document.querySelector('.icon-menu'),
    iconCross = document.querySelector('.icon-cross'),
    navList = document.querySelector('.nav__list');

function burgerToggle() {
    navList.classList.toggle('hamburger--visible');
    iconMenu.classList.toggle('icon--hidden');
    iconCross.classList.toggle('icon--hidden');
}

menuBtn.addEventListener('click', burgerToggle);
navList.addEventListener('click', () => {
    if (navList.classList.contains('hamburger--visible')) burgerToggle()
});