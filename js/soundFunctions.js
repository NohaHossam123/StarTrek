////////////////////////////////////  audio functions ///////////////////////////////////

let fireSound = function()
{
    let audio = document.getElementById("fireSound");
    audio.currentTime = 0;
    audio.volume = 0.1;
    audio.play();
};


let play_collision_rock = function()
{
    let audio = document.getElementById("explosion");
    audio.currentTime = 0;
    audio.play();
};



let playGameSound = function(mode)
{
    let audio = document.getElementById("lowsound");
    audio.volume = 0.4;
    if (mode === "play") {
        audio.play();
    }
    else {
        audio.pause();
        audio.currentTime = 0;    }
};



let playMainMenu = function (mode)
{
    let audio = document.getElementById("mainMenu");
    audio.volume = 0.3;
    if (mode === "play") {
        audio.play();
    }
    else {
        audio.pause();
        audio.currentTime = 0;
    }

};

let divaudio = function()
{
    let divadui = document.getElementById("plyspell");
    divadui.currentTime = 0;
    divadui.play();
};


let clickMenu = function()
{
    let audio = document.getElementById("menuClick");
    audio.currentTime = 0;
    audio.play();
};


let levelUpSound = function()
{
    let audio = document.getElementById("levelUp");
    audio.play();
};


let playGameOver = function()
{
    let audio = document.getElementById("game_over");
    audio.play();
}


playMainMenu("play");

