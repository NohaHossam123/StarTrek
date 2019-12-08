
// ---------------------------------- shoot class -------------------------------------------


class Shoot {
    constructor(src,shotmode) 
    {
        this.shot = classImg.cloneNode(true);
        this.shot.src = src;
        this.shot.setAttribute("style", "width:18px; height:18px;");
        this.shot.style.position = "absolute";

        if (shotmode === "start")
        {
            this.shot.style.top = `${ship.spaceShip.offsetTop - 10 }px`;
            this.shot.style.left = `${ship.spaceShip.offsetLeft + (ship.spaceShip.offsetWidth-105/2)}px`;            
        }

        else if (shotmode ==="powerR")
        {
            this.shot.style.top = `${ship.spaceShip.offsetTop -10 }px`;
            this.shot.style.left = `${ship.spaceShip.offsetLeft + (ship.spaceShip.offsetWidth-105/ 2) + 15}px`;
        }

        else if (shotmode == "powerL") 
        {
            this.shot.style.top = `${ship.spaceShip.offsetTop - 10}px`;
            this.shot.style.left = `${ship.spaceShip.offsetLeft + (ship.spaceShip.offsetWidth-105/2) - 15}px`
        }
        
        container.appendChild(this.shot);

        //for levels 
        let shotSpeed=0;

        if(level===1)
        {
            shotSpeed=15;
        }
        else if(level===2)
        {
            shotSpeed=10;
        }
        else if(level===3)
        {
            shotSpeed=5;
        }

        this.interval= setInterval(()=>{this.moveUp(shotmode)}, shotSpeed);
        fireSound();
    }

    moveUp(shotmode)
    {
        // remove shot at the top
        if(this.shot.offsetTop < 30||(this.shot.offsetLeft>window.innerWidth)||this.shot.offsetLeft<30)
        {
            clearInterval(this.interval);
            container.removeChild(this.shot);
            delete(this.shot);
            delete(this.interval);
        }
        else
        {
            this.shot.style.top = `${this.shot.offsetTop - 10}px`;

            // shooting rocks
            let flag = 1;
            for(let i = 0; i < rocksArray.length; i++)
            {
                if (
                    this.shot.offsetLeft >= rocksArray[i].rock.offsetLeft &&
                    this.shot.offsetLeft <= rocksArray[i].rock.offsetLeft+ rocksArray[i].rock.offsetWidth &&
                    (rocksArray[i].rock.offsetTop + rocksArray[i].rock.offsetHeight) - this.shot.offsetTop > 8 &&
                    (rocksArray[i].rock.offsetTop + rocksArray[i].rock.offsetHeight) - this.shot.offsetTop <70)
                    {
                        play_collision_rock();
                        // deleting shot
                        clearInterval(this.interval);
                        container.removeChild(this.shot);
                        delete(this.shot);
                        delete(this.interval);
                         
                        // deleting rock
                        clearInterval(rocksArray[i].interval);
                        container.removeChild(rocksArray[i].rock);
                        rocksArray.splice(i, 1);
                        
                        // increase score
                        score+=10;
                        scoreDiv.innerText=`Score : ${score}`;

                        // increase level
                        if(score >= 200)
                        {
                            level = 3;
                            levelUpSound();

                            if(score === 200)
                            {
                              level_up(3);
                            }

                        }
                        else if (score >= 100)
                        {
                            level = 2;
                            levelUpSound();
                            
                            if(score == 100)
                            {
                              level_up(2);
                            }
                        }

                        else
                        {
                            level = 1;
                        }
                        levelDiv.innerText=`Level : ${level} /3 `;
                        flag = 0;
                        break;
                }
            }

            if(flag)
            {
                // shooting star
                for(let i = 0; i < starArray.length; i++)
                {
                    if (
                        this.shot.offsetLeft >= starArray[i].star.offsetLeft &&
                        this.shot.offsetLeft <= starArray[i].star.offsetLeft+ starArray[i].star.offsetWidth &&
                        (starArray[i].star.offsetTop + starArray[i].star.offsetHeight) - this.shot.offsetTop > 8 &&
                        (starArray[i].star.offsetTop + starArray[i].star.offsetHeight) - this.shot.offsetTop <70)
                        {
                            play_collision_rock();

                            // deleting shot
                            clearInterval(this.interval);
                            container.removeChild(this.shot);
                            delete(this.shot);
                            delete(this.interval);

                            // deleting star
                            clearInterval(starArray[i].interval);
                            container.removeChild(starArray[i].star);
                            starArray.splice(i, 1);

                            
                            break;
                    }
                }
            }
        }
    }
}

