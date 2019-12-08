
//-------------------------- level up class ---------------------------------------
// to create levels paragraph for each level

class LevelUp 
{
constructor(num)
{
    this.levels_container = document.createElement("div");
    container.appendChild(this.levels_container);
     
     this.levels_container.setAttribute("style",`opacity:0; position:absolute; top:${window.innerHeight/2 - 250}px; 
     left:${window.innerWidth*30/100}px; z-index:20; width:40%; height:20%; color:white; font-size:6em; 
     text-shadow: 0 0 20px whitesmoke;text-align:center;`);
     
     this.paragraph = document.createElement("p");
     this.levels_container.appendChild(this.paragraph);
     this.paragraph.innerHTML=`LEVEL ${num}`;
     this.levels_container.style.animation="level_up 1500ms linear forwards";
     this.interval = setTimeout(()=>{
         this.levels_container.removeChild(this.paragraph);
         container.removeChild(this.levels_container);
        }, 1500);
}
}

// function to create level
function level_up(num) { new LevelUp(num);}
