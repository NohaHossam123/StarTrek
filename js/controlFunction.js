
////////////////////////////// keys function /////////////////////////////////////////
let keyPress = function (event)
{
    keyPressed[event.code] = true; 
};

let keyReleased = function (event) 
{
    keyPressed[event.code] = false; 
};


document.addEventListener("keydown", keyPress);
document.addEventListener("keyup", keyReleased);


//----------------------------------- control game function-------------------------------------

let controlSpaceShip = function () 
    {
        
        let movePixel=0;
        if(level===1)
        {
            movePixel=20;
            rockTimeInterval=Math.floor((Math.random() * 200) + 750);
            fireTimeInterval=150;
        }
        else if(level===2)
        {
            movePixel=30;
            rockTimeInterval=Math.floor((Math.random() * 150) + 600);
            fireTimeInterval=130;
        }
        else if (level===3) {
            rockTimeInterval=Math.floor((Math.random() * 150) + 400);
            fireTimeInterval=100;
            movePixel=40;
        }

        //control using arrows 

        if (keyPressed["ArrowRight"]) 
        {
            if (ship.spaceShip.offsetLeft < (window.innerWidth-ship.spaceShip.offsetWidth-30)) 
            {
                ship.spaceShip.style.left = `${ship.spaceShip.offsetLeft += movePixel}px`;
            }
        }

        if (keyPressed["ArrowLeft"]) 
        {
            if (ship.spaceShip.offsetLeft > 20) 
            {
                ship.spaceShip.style.left = `${ship.spaceShip.offsetLeft -= movePixel}px`;
            }
        }

        if (keyPressed["ArrowDown"]) 
        {
            if (ship.spaceShip.offsetTop < (window.innerHeight-ship.spaceShip.offsetHeight-30)) 
            {
                ship.spaceShip.style.top = `${ship.spaceShip.offsetTop += movePixel}px`;
            }
        }
        
        if (keyPressed["ArrowUp"]) 
        {
            if (ship.spaceShip.offsetTop > 10) 
            {
                ship.spaceShip.style.top = `${ship.spaceShip.offsetTop -= movePixel}px`;
            }
        }

        //controll using characters

        if (keyPressed["KeyD"]) 
        { //left diriction for me -30 for the scrolling
            
            if (ship.spaceShip.offsetLeft < (window.innerWidth-ship.spaceShip.offsetWidth-30)) 
            {
                ship.spaceShip.style.left = `${ship.spaceShip.offsetLeft += movePixel}px`;
            }
        }
        if (keyPressed["KeyA"]) 
        {
            if (ship.spaceShip.offsetLeft > 16) 
            {
                ship.spaceShip.style.left = `${ship.spaceShip.offsetLeft -= movePixel}px`;
            }
        }
        if (keyPressed["KeyS"]) 
        {
            if (ship.spaceShip.offsetTop < (window.innerHeight - ship.spaceShip.offsetHeight - 30))
    
                ship.spaceShip.style.top = `${ship.spaceShip.offsetTop+=movePixel}px`;
    
        }
        if (keyPressed["KeyW"]) 
        {
            if (ship.spaceShip.offsetTop > 16)
    
                ship.spaceShip.style.top = `${ship.spaceShip.offsetTop-=movePixel}px`;
    
        }

};


