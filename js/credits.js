var  para_animation = document.getElementsByClassName("developer");
var  header_animation =document.getElementById("header");
var button_anime = document.getElementById("credit-button");

for (let i=0; i<para_animation.length;i++)
{
   para_animation[i].style.animation = `names_animation 8s ease-out ${i+1}s forwards`;
}

header_animation.style.animation ="names_animation 8s ease-out forwards ";
button_anime.style.animation ="button_animation 50ms linear 14s forwards";


function openHome ()
{
   window.open("star Trek.html","_self");
}


