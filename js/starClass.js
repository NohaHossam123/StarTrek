//---------------------------------- star class -----------------------------------------

class Star 
{
    constructor(src) {
        this.fallingPosition = Math.floor(Math.random() * (window.innerWidth -250))+100;
        this.star = classImg.cloneNode(true);
        this.star.src = src;
        this.star.setAttribute("style",`position:absolute;top:-100px;width:55px;height:55px;margin:20px;left:
                                    ${this.fallingPosition}px`);
        container.appendChild(this.star);
        starArray.push(this);
        this.interval= setInterval(()=>{this.moveDown()}, 120);
    }

    moveDown()
    {
        if (this.star.offsetTop + this.star.offsetHeight > window.innerHeight)
        {
            clearInterval(this.interval);
            container.removeChild(this.star);
            starArray.splice(0, 1);
            delete(this.star);
            delete(this.interval);
        }
        else
        {
            this.star.style.top = `${this.star.offsetTop + 10}px`;

            // collision with ship
            if (this.star.offsetLeft + this.star.offsetWidth >= ship.spaceShip.offsetLeft &&
                this.star.offsetLeft <= ship.spaceShip.offsetLeft+ ship.spaceShip.offsetWidth &&
                this.star.offsetTop + this.star.offsetHeight >= ship.spaceShip.offsetTop &&
                this.star.offsetTop <= ship.spaceShip.offsetTop+ ship.spaceShip.offsetHeight)
            {
                divaudio();

                // deleting star
                clearInterval(this.interval);
                container.removeChild(this.star);
                starArray.splice(0, 1);
                delete(this.star);
                delete(this.interval);

                // increase star
                lives ++ ;
                Power = true;
                lifeDiv.innerText=`Live : ${lives}`;
            }
        }
    }
}

