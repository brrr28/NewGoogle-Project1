var apiUrl = "http://localhost:3000";
function getRequest(url, params) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest(); //
    xhr.open("GET", apiUrl + url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(xhr.response)
      }
    };

    xhr.send();
  });
}

getRequest("/developers")
.then(function(response) {
  var data = JSON.parse(response);
  showInfoDevelopers(data)
}).catch(function(error){
  console.log("Error!!!");
  console.log(error);
});



let card__info = document.getElementsByClassName("card__info"); 

function showInfoDevelopers(json) {
  var dataDevelopInfo = json; 
    for (var i = 0; i <= dataDevelopInfo.developers.length; i++) {
      var ul = document.createElement("ul");
      for (let key in dataDevelopInfo.developers[i]) {
        console.log(key)
        if(key === "ID"){
          continue;
        }
        else{
          let li = document.createElement("li");
        ul.appendChild(li)
        li.innerHTML = `${[key]}: ${dataDevelopInfo.developers[i][key]}`;
        }
        
        card__info[i].appendChild(ul);
      }
  }
}



////////////////___________modal on cards develop__________//////

var modalEdit__modal = document.querySelector('.modalEdit__modal');
var modalBtn = document.querySelectorAll('.modalBtn');
var modalEdit__modalClose = document.getElementsByClassName('modalEdit__modal-close')[0];

modalBtn.forEach(function(modalBtn) {
  modalBtn.addEventListener('click', function () {
    modalEdit__modal.style.display = 'block'
      console.log(11)
      editInfo__field = document.querySelector('.editInfo__field')
      editInfo__field.innerHTML = 'mmkff'
  })
})

modalEdit__modalClose.addEventListener('click', function () {
  modalEdit__modal.style.display = 'none';
}) 


window.addEventListener('click', function (e) {
    if (e.target == modalEdit__modal){
      modalEdit__modal.style.display = 'none';
        
    }
})


// var a = {
//   a: 1,

//postRequest( '/developers', a);
// function postRequest(url,data){
//   var xhr = new XMLHttpRequest();
//   xhr.open("POST", apiUrl + url,false);
//   xhr.setRequestHeader("Content-Type", "application/json");

//   xhr.send(JSON.stringify(data))
// }
  


  window.addEventListener('scroll' , function (){
    var header = document.querySelector('.header__wrapper');
    header.classList.toggle('header__scroll', window.scrollY > 0);
  });
