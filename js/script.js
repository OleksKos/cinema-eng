const schemeSvg = document.querySelector('.scheme__svg');
const price = document.querySelector('.price__sum');
let sum = 0;
const setPrice = 25;
schemeSvg.addEventListener('click', (event) => {
  // debugger;
  console.log(event.target);
  if (!event.target.classList.contains('booked') && !event.target.classList.contains('example') && !event.target.classList.contains('scheme__svg')) {
    // debugger;
    event.target.classList.toggle('active');
    if (event.target.classList.contains('active')) {
      sum = sum + setPrice;
      price.innerHTML = `$${sum}`;
    } else {
      sum = sum - setPrice;
      price.innerHTML = `$${sum}`;
    }
  }
})

const mobileMenuIcon = document.querySelector('.humburger-menu');
const mobileMenu = document.querySelector('.header__nav');
const icon = document.querySelectorAll('.fas');

mobileMenuIcon.addEventListener('click', () => {
  mobileMenuIcon.classList.toggle('humburger-menu-active');
  mobileMenu.classList.toggle('menu-active');
  icon.forEach(item => item.classList.toggle('fas-color'));
})

window.addEventListener('scroll', () => {
  mobileMenuIcon.classList.remove('humburger-menu-active');
  mobileMenu.classList.remove('menu-active');
})