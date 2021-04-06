var apiUrl = "http://localhost:3000";
function getRequest(url, params) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest(); //
    xhr.open("GET", apiUrl + url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(xhr.response);
      }
    };

    xhr.send();
  });
}

getRequest("/developers")
  .then(function (response) {
    var data = JSON.parse(response);
    showInfoDevelopers(data);
  })
  .catch(function (error) {
    console.log("Error!!!");
    console.log(error);
  });
/*************************************************************************************** */
developBox = document.querySelector(".developBox");
var modalBlock = document.createElement("div");
modalBlock.setAttribute("class", "modalBlock");
var modalContent = document.createElement("div");
modalContent.setAttribute("class", "modalContent");
var modalSpan = document.createElement("span");
modalSpan.setAttribute("class", "modalSpan");
var modalButton = document.createElement("button");
modalSpan.innerHTML = "&times;";
modalButton.innerHTML = "Button"


modalBlock.style.border = "3px solid black";
modalBlock.style.display = "none";
modalContent.appendChild(modalSpan);
modalContent.appendChild(modalButton);
modalBlock.appendChild(modalContent);
developBox.appendChild(modalBlock);

var input2 = document.createElement('input');


function showInfoDevelopers(data) {


  for (var i = 0; i < data.developers.length; i++) {

    
    var cardDevelop = document.createElement("div");
    cardDevelop.setAttribute("class", "cardDevelop");
    var buttonEdit = document.createElement("button");
    buttonEdit.innerHTML = "blalalal";
    buttonEdit.setAttribute("class", "buttonEdit");
    var ul = document.createElement("ul");
    var imgDev = document.createElement("img");
    imgDev.setAttribute("class", "imgDev");
   


    for (let key in data.developers[i]) {


      
      console.log(data.developers[i]["Img"]);
      imgDev.src = data.developers[i]["Img"];
      var li = document.createElement("li");
      if (key != "Img") 
      li.innerHTML = `${key}: ${data.developers[i][key]}`;
      var input = document.createElement('input');
      input.value = ` ${data.developers[i][key]}`;


      cardDevelop.appendChild(imgDev);
      ul.appendChild(li);
      cardDevelop.appendChild(ul);
      cardDevelop.appendChild(buttonEdit);
     
    }
    modalContent.appendChild(input)
    developBox.appendChild(cardDevelop); 
  }

 

  document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains("buttonEdit"))
      modalBlock.style.display = "block";
     
      modalContent.appendChild(input)


  });
}



modalSpan.addEventListener("click", function () {
  modalBlock.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target == modalBlock) {
    modalBlock.style.display = "none";
  }
});



// var a = {
//   a: 1,

//postRequest( '/developers', a);
// function postRequest(url,data){
//   var xhr = new XMLHttpRequest();
//   xhr.open("POST", apiUrl + url,false);
//   xhr.setRequestHeader("Content-Type", "application/json");

//   xhr.send(JSON.stringify(data))
// }

window.addEventListener("scroll", function () {
  var header = document.querySelector(".header__wrapper");
  header.classList.toggle("header__scroll", window.scrollY > 0);
});
