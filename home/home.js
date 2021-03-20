// var infoDevelopers = fetch("infoDevelop.json")
//   .then(response => response.json())
//   .then(json => console.log(json));
//   console.log(a)


// эмуляция получения фетч запроса через промис 
let infoDevelopers  = new Promise(function(resolve,reject){
    var a = fetch("infoDevelop.json")
    resolve((a))
});

infoDevelopers.then(response => response.json())
 .then(json => showInfoDevelopers(json));

//  // переменные для вывода инфо под карточку дева
var card_list_name = document.querySelectorAll('.card_list_name');
var card_list_age = document.querySelectorAll('.card_list_age');
var card_list_color  = document.querySelectorAll('.card_list_color');
var card_list_phone  = document.querySelectorAll('.card_list_phone');
var card_list_city = document.querySelectorAll('.card_list_city');
var card_list_hobbie  = document.querySelectorAll(".card_list_hobbie");



// ф-ция выводит и перебирает циклом распарсеный JSON и добавляет в карточки инфу
 function showInfoDevelopers(json){
     var dataDevelopInfo = json;
    for (var i = 0; i <= dataDevelopInfo.developers.length; i++){
        for(let key in dataDevelopInfo.developers[i]){
            console.log(key)
        card_list_name[i].innerHTML = `${dataDevelopInfo.developers[i].Name}`;
        card_list_age[i].innerHTML = `${dataDevelopInfo.developers[i].Age} years`
        card_list_color[i].innerHTML = `${dataDevelopInfo.developers[i].Color} is favorite color`
        card_list_phone[i].innerHTML = `${dataDevelopInfo.developers[i].Phone} is 
        my phone model `
        card_list_city[i].innerHTML = `I live in ${dataDevelopInfo.developers[i].City}`
        card_list_hobbie[i].innerHTML = `${dataDevelopInfo.developers[i].Hobbie}`
        }
    }
}
 