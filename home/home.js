// эмуляция получения фетч запроса через промис
let infoDevelopers = new Promise(function (resolve, reject) {
    var a = fetch("infoDevelop.json");
    resolve(a);
    reject(new Error("Smsg wrong!"));
  })
    .then((response) => response.json())
    .then(
      (json) => showInfoDevelopers(json),
      (error) => console.log("Error")
    );
  
  
  var cardInfo = document.getElementsByClassName("card_info"); 
  //html  коллекция для получ всех карточек
  
  // ф-ция выводит и перебирает циклом распарсеный JSON и добавляет в карточки инфу
  function showInfoDevelopers(json) {

    var dataDevelopInfo = json; // сам распарсеный файл json

    // for (var i = 0; i < cardInfo.length; i++) {
      // перебор коллекции
      for (var i = 0; i <= dataDevelopInfo.developers.length; i++) {

        var ul = document.createElement("ul");

        for (let key in dataDevelopInfo.developers[i]) {
          
          console.log(dataDevelopInfo.developers[i]);
          let li = document.createElement("li");
          ul.appendChild(li);
          li.innerHTML = `${[key]}: ${dataDevelopInfo.developers[i][key]}`;
         
          cardInfo[i].appendChild(ul);
        }
      }
    }
  
  window.addEventListener('scroll' , function (){
    var header = document.querySelector('.header__wrapper');
    header.classList.toggle('header__scroll', window.scrollY > 0);
  });