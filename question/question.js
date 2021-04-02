var formButton = document.querySelector('.selections-box__AddQuestions');
var popup = document.querySelector('.form__addQuastion');
formButton.onclick = function () {
    popup.style.display = 'block';
};

var closeButton = document.querySelector('.close__button');
closeButton.onclick = function () {
    popup.style.display = 'none';
};
window.addEventListener('scroll' , function (){
    var header = document.querySelector('.header__wrapper');
    header.classList.toggle('header__scroll', window.scrollY > 0);
  });
