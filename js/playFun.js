
//----------------------------------- play function ----------------------------------------
playerOne = playersArr[0];
playerTwo=playersArr[1];
playerThree=playersArr[2];
let contInterval;

function play(player)
{
    playMainMenu("stop");
    playGameSound("play");
    level_up(1);
    document.body.style.backgroundImage = "url('./img/g.gif')";
    stopPower=true;
    container.style.display="block";
    document.getElementById("menuContainer").style.display="none";
    document.getElementById("gameOverWindow").style.display = "none";
    document.getElementById("charContainer").style.display = "none";

    // creating a space ship
    ship = new Ship(player.src); //playerSpaceshipSrc
    let fire = null;
    let rightFire=null;
    let leftFire = null;
    level = 1;
    score = 0;
    lives = 3;
    sec1 = 0;
    sec2 = 0;
    min1 = 0;
    min2 = 0;
    totalSeconds = 0;
    lifeDiv.innerText=`Live : ${lives}`;
    scoreDiv.innerText=`Score : ${score}`;
    levelDiv.innerText=`Level : ${level} / 3`;
    document.getElementById("timeValue").innerText=`${min2}${min1}:${sec2}${sec1}`


    rockInterval = setInterval(() => {new Rock("./img/rock1.gif");}, rockTimeInterval);
    liveInterval = setInterval(() => {new Star("./img/star.png");}, 10000);
    fireInterval = setInterval(() => {

        if (keyPressed["Space"])
         {
            fire = new Shoot('./img/XDZT.gif',"start");
            fireSound();
         }

        if (Power && keyPressed["Space"])
        {
            fire = new Shoot('./img/XDZT.gif',"start");
            rightFire = new Shoot('./img/XDZT.gif',"powerL")  ;
            leftFire = new Shoot('./img/XDZT.gif',"powerR")  ;
            fireSound();
            if(stopPower) {
                stopPower = true;
            }
            }
            if (Power && stopPower)
            { 
                stopPower=false;
                setTimeout(()=>{Power=false;stopPower=true;},5000);
            }

        }, fireTimeInterval);

    controlInterval = setInterval(()=> {
        controlSpaceShip();

        if(lives<=0){
        gameOver(currentPlayer);

        
        }
},50);

contInterval = setInterval(()=> {
    controlSpaceShip();

    
        if(score==300){
            document.getElementById("gameOver").innerHTML="congrats! YOU WIN :D";
        gameOver(currentPlayer);

        
        }
},50);

    
    

    timeInterval = setInterval(timer,1000);


}
