
//-------------------------- player class ---------------------------------------
class Player
{
    constructor(src)
    {
        this.survivalTime = null;
        this.lives = null;
        this.src= src;
        this.style = "width:80px; height:80px;";

    }
}

let playerOne = new Player("./img/1.gif");
let playerTwo = new Player("./img/2.gif");
let playerThree = new Player("./img/3.gif");

let playersArr=[playerOne,playerTwo,playerThree];
let currentPlayer = playerOne;
