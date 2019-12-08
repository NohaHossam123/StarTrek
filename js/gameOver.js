/////////////////////////////////// GAME OVER /////////////////////////////////////////
// ------------------------------- game over function ---------------------------------
let gameOver = function(player)
 {
    clearInterval(rockInterval);
    clearInterval(controlInterval);
    clearInterval(liveInterval);
    clearInterval(fireInterval);
    clearInterval(timeInterval);
    gameOverDiv.style.display = "block";
    playGameSound("stop");
    setTimeout(() => {
        playGameOver();

    }, 1000);

};



// ------------------------------ go home function ------------------------------------------

let gameOverBtn = document.getElementById("goHome");

let goHome = function(){
    container.removeChild(ship.spaceShip);
    document.getElementById("container").style.display="none";
    gameOverDiv.style.display = "none";
    document.getElementById("menuContainer").style.display="block";
    playGameSound("stop");
    playMainMenu("play");
    document.getElementById("container").style.display="none";
    gameOverDiv.style.display = "none";

};


gameOverBtn.addEventListener("click",goHome);


//------------------------------- playAgain function -----------------------------------------
let playAgainBtn = document.getElementById("playagain");

playAgainBtn.addEventListener("click",()=>{
    container.removeChild(ship.spaceShip);
    play(currentPlayer);
});



