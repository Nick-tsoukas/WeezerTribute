var menuItems = document.getElementsByClassName('menu_item');

var home = document.getElementById('homeLine');
var bio = document.getElementById('bioLine');
var card = document.getElementById('myCard');

document.addEventListener("DOMContentLoaded", function() {
  bio.style.opacity = "0";
  card.style.opacity = "0";
});

Array.from(menuItems).forEach(function(current,index, array){
  current.addEventListener('click', function(e){
    if(this.id === "homeHeader"){
      home.style.opacity = "1";
      bio.style.opacity = "0";
      card.style.opacity = "0"
    } else {
      bio.style.opacity = "1";
      card.style.opacity = "1";
      home.style.opacity = "0";
    }
  })
})
// bioHeader.addEventListener("click", function(){
//   bio.style.opacity = "block";
//   console.log(bio)
// })
