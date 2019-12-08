/////////////////////////////////// variables /////////////////////////////////////
//containers
let container = document.getElementById("container");
let scoreDiv = document.getElementById("scoreValue");
let lifeDiv = document.getElementById("liveValue");
let levelDiv = document.getElementById("levelValue");
let gameOverDiv = document.getElementById("gameOverWindow");

let level = 1 ;
let score = 0;
let star = 10;
let lives = 3;

//Timer
let sec1 = null;
let sec2 = null;
let min1 = null;
let min2 = null;
let totalSeconds = null;
let ship = null;
let keyPressed = [];

//Playing intervals
let timeInterval  = null ;
let rockInterval = null;
let controlInterval = null ;
let liveInterval =null ;
let fireInterval = null;

//arrays to controll different images 
let classImg = document.createElement("img");
let rocksArray = [];
let spaceCrashArray = [];
let starArray= [];


// to increase power of shts
let Power = null;
let stopPower=null;

//fire and rock speed;
let rockTimeInterval=Math.floor((Math.random() * 200) + 750);
let fireTimeInterval=150;