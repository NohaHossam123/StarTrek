
//-------------------------- rock class ---------------------------------------

class Rock
{
    constructor(src)
    {
        this.fallingPosition = Math.floor(Math.random() * (window.innerWidth -250))+100;
        this.rock = classImg.cloneNode(true);
        this.rock.src = src;
        this.rock.setAttribute("style",`position:absolute;top:-100px;width:60px;height:60px;margin:15px;
                                        left:${this.fallingPosition}px`);

        container.appendChild(this.rock);
        rocksArray.push(this);

        //for level
        let speedOfRock=0;
        if(level === 1)
        {
            speedOfRock= 100;
        }
        else if(level === 2)
        {
            speedOfRock=80;
        }
        else if(level === 3)
        {
            speedOfRock=50;
        }

        this.interval= setInterval(()=>{this.moveDown()}, speedOfRock);
    }

    moveDown()
    {
        if (this.rock.offsetTop + this.rock.offsetHeight > window.innerHeight)
        {
            clearInterval(this.interval);
            container.removeChild(this.rock);
            rocksArray.splice(0, 1);
            delete(this.rock);
            delete(this.interval);
        }
        else
        {

            this.rock.style.top = `${this.rock.offsetTop + 10}px`;
            // collision with ship
            if (
                this.rock.offsetLeft + this.rock.offsetWidth >= ship.spaceShip.offsetLeft &&
                this.rock.offsetLeft <= ship.spaceShip.offsetLeft+ ship.spaceShip.offsetWidth &&
                this.rock.offsetTop + this.rock.offsetHeight >= ship.spaceShip.offsetTop &&
                this.rock.offsetTop <= ship.spaceShip.offsetTop+ ship.spaceShip.offsetHeight
            )
            {
                imgcollisionSpace_Rocks.spaceCrashVolcano = new imgcollisionSpace_Rocks;

                // deleting rock
                play_collision_rock();
                clearInterval(this.interval);
                container.removeChild(this.rock);
                rocksArray.splice(0, 1);
                delete(this.rock);
                delete(this.interval);
                if (lives!==0){
                    lives --;}
                lifeDiv.innerText=`Live : ${lives}`;
                //booming
                setTimeout(()=>{
                    for (let j = 0; j < spaceCrashArray.length; j++) {
                imgcollisionSpace_Rocks.currentVolcano = spaceCrashArray[j];
                imgcollisionSpace_Rocks.currentVolcano.remove();
                spaceCrashArray.splice(j, 1);
            }
            },200);
            }
        }
    }
}
