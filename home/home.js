// var infoDevelopers = fetch("infoDevelop.json")
//   .then(response => response.json())
//   .then(json => console.log(json));

//   console.log(a)
let infoDevelopers  = new Promise(function(resolve,reject){
    var a = fetch("infoDevelop.json")
    resolve((a))
});

infoDevelopers.then(response => response.json())
 .then(json => showInfoDevelopers(json));

 // переменные для вывода инфо под карточку дева
var card_list_name = document.querySelectorAll('.card_list_name');
var card_list_age = document.querySelectorAll('.card_list_age');
var card_list_color  = document.querySelectorAll('.card_list_color');
var card_list_phone  = document.querySelectorAll('.card_list_phone');
var card_list_city = document.querySelectorAll('.card_list_city');
var card_list_hobbie  = document.querySelectorAll(".card_list_hobbie");
// ф-ция выводит и перебирает циклом распарсеный JSON
 function showInfoDevelopers(json){
     var dataDevelopInfo = json;
    //console.log( dataDevelopInfo)


for(var k = 0; k<= card_list_name.length; k++){
    for (var i = 0; i < dataDevelopInfo.developers.length; i++){
        for(let key in dataDevelopInfo.developers[i]){
            console.log(key)
        
        //console.log(Object.keys(dataDevelopInfo.developers[i]))
        //console.log(card_list_hobbie[i]);
        //console.log(dataDevelopInfo.developers[i].Hobbie)

        card_list_name[i].innerHTML = `Name :${dataDevelopInfo.developers[i].Name}`;
        card_list_age[i].innerHTML = `Age: ${dataDevelopInfo.developers[i].Age}`
        card_list_color[i].innerHTML = `Color: ${dataDevelopInfo.developers[i].Color}`
        card_list_phone[i].innerHTML = `Phone: ${dataDevelopInfo.developers[i].Phone}`
        card_list_city[i].innerHTML = `City: ${dataDevelopInfo.developers[i].City}`
        card_list_hobbie[i].innerHTML = `${dataDevelopInfo.developers[i].Hobbie}`


    }
}
}

 }
