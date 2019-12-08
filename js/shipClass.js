
// ------------------------- class ship ------------------------------------------------

class Ship {
    constructor(src) {
        this.spaceShip = classImg.cloneNode(true);
        this.spaceShip.src = src;
        this.spaceShip.setAttribute("style",`position:absolute;top:${window.innerHeight - 170}px;
        left:${(window.innerWidth - 155) / 2}px; width:100px;height:100px`);
        container.appendChild(this.spaceShip);
    }
}
