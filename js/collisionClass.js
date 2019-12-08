
//-------------------------- collision class ---------------------------------------
//to create collision images
class imgcollisionSpace_Rocks 
{
    constructor() 
    {
        this.spaceCrashImg = document.createElement("img");
        this.spaceCrashImg.src = "./img/boom.gif";
        this.spaceCrashImg.setAttribute("style",`position:absolute;top:${ship.spaceShip.offsetTop + 20}px; width:60pxpx; height:60px;
        left:${ship.spaceShip.offsetLeft - 50 + ship.spaceShip.offsetWidth / 2}px`);
        container.appendChild(this.spaceCrashImg);
        spaceCrashArray.push(this.spaceCrashImg);
    }
}
