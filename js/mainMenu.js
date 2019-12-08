
//////////////////////////////////////  Main Menu   ////////////////////////////////////////////
let playNow = document.getElementById("playbtn");
let exitSound = document.getElementById("close");
let howtoplay= document.getElementById("howtoplay");
let credits = document.getElementById("made_by");
let firstcharacter = document.getElementById("firstCharacter");
let secondcharacter = document.getElementById("secondCharacter");
let thirdcharacter = document.getElementById("lastCharacter");
let containerOfChar = document.getElementById("charContainer") ;

// --click sound

playNow.addEventListener("mouseover" , clickMenu);
exitSound.addEventListener("mouseover" , clickMenu);
howtoplay.addEventListener("mouseover" , clickMenu);
credits.addEventListener("mouseover" , clickMenu);
firstcharacter.addEventListener("click" , clickMenu);
secondcharacter.addEventListener("click" , clickMenu);
thirdcharacter.addEventListener("click" , clickMenu);


//--choose character

function display()
{
    document.getElementById("menuContainer").style.display="none";
    containerOfChar.style.display = "block";
}

playNow.addEventListener('click',display) ;




//-------------------------------- character function ------------------------------------
function chooseCharacter(character)
{
    switch(character)
    {
        case 1:
            firstcharacter.classList.add('checkChar');
            secondcharacter.classList.remove('checkChar');
            thirdcharacter.classList.remove('checkChar');
            currentPlayer = playerOne;
            break;
        case 2:
            firstcharacter.classList.remove('checkChar');
            secondcharacter.classList.add('checkChar');
            thirdcharacter.classList.remove('checkChar');
            currentPlayer = playerTwo;
            break;
        case 3:
            firstcharacter.classList.remove('checkChar');
            secondcharacter.classList.remove('checkChar');
            thirdcharacter.classList.add('checkChar');
            currentPlayer = playerThree;
            break;
    }
}

    let redir = document.getElementById("play");

    let redi = function()
    {
        play(currentPlayer);
    };

    redir.addEventListener("click" , redi);

    firstcharacter.addEventListener('click', ()=>{chooseCharacter(1)});
    secondcharacter.addEventListener('click', ()=>{chooseCharacter(2)});
    thirdcharacter.addEventListener('click', ()=>{chooseCharacter(3)});

