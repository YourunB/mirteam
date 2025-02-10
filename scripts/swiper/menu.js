const menu = document.getElementById('navigation');
const btnBurger = document.getElementById('btn-burger');
const header = document.getElementById('header');

btnBurger.addEventListener('click', () => {
  btnBurger.classList.toggle('burger_close');
  menu.classList.toggle('navigation_show');
  header.classList.toggle('header_active');
})