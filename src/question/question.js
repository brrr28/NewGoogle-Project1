import "./question.scss"

window.addEventListener('scroll' , function (){
    var header = document.querySelector('.header__wrapper');
    header.classList.toggle('header__scroll', window.scrollY > 0);
  });