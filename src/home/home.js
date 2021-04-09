import "./home.scss"
var apiUrl = "http://localhost:3000";

function getRequest(url, params) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest(); 
    xhr.open("GET", apiUrl + url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(xhr.response);
      }
    };

    xhr.send();
  });
}

function postRequest(url, data) {
  return new Promise(function(succeed, fail) {
    var request = new XMLHttpRequest();
    request.open("POST", apiUrl + url, true);
	request.setRequestHeader("Content-Type", "application/json");
    request.addEventListener("error", function() {
      fail(new Error("Network error"));
    });
    request.send(JSON.stringify(data));
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
var developBox = document.querySelector(".developBox");
var modalBlock = document.createElement("div");
modalBlock.setAttribute("class", "developBox__modalBlock");
var modalContent = document.createElement("div");
modalContent.setAttribute("class", "developBox__modalContent");
var modalSpan = document.createElement("span");
modalSpan.setAttribute("class", "developBox__modalSpan");
var modalButton = document.createElement("button");
modalButton.setAttribute("class", "developBox__modalButton");
modalSpan.innerHTML = "&times;";
modalButton.innerHTML = "Save change";
modalBlock.style.display = "none";
var modalBlockInputs = document.createElement("div");
modalBlockInputs.setAttribute("class", "developBox__blockInputs , blockInfo");

var inputName = document.createElement("input"); 
inputName.setAttribute('type','text')
var inputAge = document.createElement("input");
inputAge.setAttribute('type','number')
var inputColor = document.createElement("input");
var inputPhone = document.createElement("input");
var inputCity = document.createElement("input");
var inputHobbie = document.createElement("textarea");
inputHobbie.setAttribute("class", "blockInfo__textarea");

modalContent.appendChild(modalSpan);
modalContent.appendChild(modalBlockInputs);
modalBlockInputs.appendChild(inputName) + "<br />";
modalBlockInputs.appendChild(inputAge) + "<br />";
modalBlockInputs.appendChild(inputColor);
modalBlockInputs.appendChild(inputPhone);
modalBlockInputs.appendChild(inputCity);
modalBlockInputs.appendChild(inputHobbie);

modalBlockInputs.appendChild(modalButton);
modalBlock.appendChild(modalContent);
developBox.appendChild(modalBlock);

function showInfoDevelopers(data) {
  for (let i = 0; i < data.developers.length; i++) {
    var divBoxInfo = document.createElement("div");
    divBoxInfo.setAttribute("class", "developBox__cardDevelop");
    var imgContainer = document.createElement("div");
    imgContainer.setAttribute("class", "developBox__imgContainer");
    var img = document.createElement("img");
    img.setAttribute("class", "developBox__img");
    var pName = document.createElement("p");
    var pAge = document.createElement("p");
    var pColor = document.createElement("p");
    var pPhone = document.createElement("p");
    var pCity = document.createElement("p");
    var pHobbie = document.createElement("p");
    var buttonWrap = document.createElement("div");
    buttonWrap.setAttribute("class", "developBox__buttonWrap");
    var buttonEdit = document.createElement("button");
    buttonEdit.innerHTML = "Edit info";
    buttonEdit.setAttribute("class", "developBox__buttonEdit");

    img.src = data.developers[i]["Img"];
    pName.innerHTML = data.developers[i]["Name"];
    console.log(pName.textContent);
    pAge.innerHTML = data.developers[i]["Age"];
    pColor.innerHTML = data.developers[i]["Color"];
    pPhone.innerHTML = data.developers[i]["Phone"];
    pCity.innerHTML = data.developers[i]["City"];
    pHobbie.innerHTML = data.developers[i]["Hobbie"];

    imgContainer.appendChild(img);
    divBoxInfo.appendChild(imgContainer);

    divBoxInfo.appendChild(pName);
    divBoxInfo.appendChild(pAge);
    divBoxInfo.appendChild(pColor);
    divBoxInfo.appendChild(pPhone);
    divBoxInfo.appendChild(pCity);
    divBoxInfo.appendChild(pHobbie);
    divBoxInfo.appendChild(buttonWrap);
    buttonWrap.appendChild(buttonEdit);
    developBox.appendChild(divBoxInfo);

    buttonEdit.onclick = function () {
      modalBlock.style.display = "block";
      inputName.value = `${data.developers[i]["Name"]}`;
      inputName.setAttribute("placeholder", "Enter name");
      inputAge.value = `${data.developers[i]["Age"]}`;
      inputAge.setAttribute("placeholder", "Enter age");
      inputColor.value = `${data.developers[i]["Color"]}`;
      inputColor.setAttribute("placeholder", "Enter color");
      inputPhone.value = `${data.developers[i]["Phone"]}`;
      inputPhone.setAttribute("placeholder", "Enter model phone");
      inputCity.value = `${data.developers[i]["City"]}`;
      inputCity.setAttribute("placeholder", "Enter city");
      inputHobbie.value = `${data.developers[i]["Hobbie"]}`;
      inputHobbie.setAttribute("placeholder", "Enter hobbie");



      modalButton.onclick = function () {
        console.log(1)
        data.developers[i]["Name"]=inputName.value;
        data.developers[i]["Age"]=inputAge.value;
        data.developers[i]["Color"]=inputColor.value;
        data.developers[i]["Phone"]=inputPhone.value;
        data.developers[i]["City"]=inputCity.value;
        data.developers[i]["Hobbie"]=inputHobbie.value;
        location.reload()
        postRequest("/developers",data );
      }
     };
    };

   
  }

modalSpan.addEventListener("click", function () {
  modalBlock.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target == modalBlock) {
    modalBlock.style.display = "none";
  }
});
