const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.header_list');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navList.classList.toggle('open');
});