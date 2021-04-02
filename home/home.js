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

var modal = document.querySelector('.modal');
var modalBtn = document.querySelectorAll('.modalBtn');
var span = document.getElementsByClassName('close')[0];

modalBtn.forEach(function(modalBtn) {
  modalBtn.addEventListener('click', function () {
      modal.style.display = 'block'
      console.log(11)
  })
})

span.addEventListener('click', function () {
    modal.style.display = 'none';
}) 


window.addEventListener('click', function (e) {
    if (e.target == modal){
        modal.style.display = 'none';
        
    }
})




// editInfoBox.onclick = function(event) {
//     if (event.target == editInfoBox) {
//       editInfoBox.style.display = "none";
//     }
// }





// var a = {
//   a: 1,

//postRequest( '/developers', a);
// function postRequest(url,data){
//   var xhr = new XMLHttpRequest();
//   xhr.open("POST", apiUrl + url,false);
//   xhr.setRequestHeader("Content-Type", "application/json");

//   xhr.send(JSON.stringify(data))
// }