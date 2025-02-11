const menu = document.getElementById('navigation');
const btnBurger = document.getElementById('btn-burger');
const header = document.getElementById('header');

btnBurger.addEventListener('click', () => {
  document.body.classList.toggle('scroll-off')
  btnBurger.classList.toggle('burger_close');
  menu.classList.toggle('navigation_show');
  header.classList.toggle('header_active');
})

window.addEventListener('scroll', () => {
  console.log('aa')
  if (document.body.getBoundingClientRect().y < 0) header.classList.add('header_sticky')
  else header.classList.remove('header_sticky')
});