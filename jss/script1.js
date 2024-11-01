const menuIcon = document.querySelector('.menu-icon');
const navbarContainer = document.querySelector('.navbar-container');

menuIcon.addEventListener('click', () => {
    navbarContainer.classList.toggle('open');
});
