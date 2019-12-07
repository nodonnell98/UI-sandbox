const morph = document.getElementById("morph");

var bubbleTarget = null;

function handler(ev) {
  var target = $(ev.target);
  var elId = target.attr('id');
  if( target.is(".bubble") ) {
     console.log(elId);
    bubbleTarget = document.getElementById(elId);
  }
  }
  $(".bubble").mouseenter(handler);

const bubbleGroup = document.getElementsByClassName('bubble');

for(let i = 0; i < bubbleGroup.length; i++){
  bubbleGroup[i].addEventListener("mouseenter", append);
  bubbleGroup[i].addEventListener("mouseleave", clear);
}

//morph.addEventListener("mouseenter", append);
//morph.addEventListener("mouseleave", clear)

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function append() {
  var positionX = 10;
  for (let i = 0; i < 6; i++) {
    let bubble = createBubble();
    positionX = getRandomFloat(10, 90);
    bubble.style.left = positionX + "%";
    bubbleTarget.appendChild(bubble);
    bubble.addEventListener("animationend", shakeUp);
  }  
}

function createBubble() {  
  let e = document.createElement("div");
  e.setAttribute("class", "bubble");
  e.style.width = getRandomInt(20, 40);;
  e.style.height = e.style.width;
  e.style.position = "absolute";
  e.style.top = "100px";
  e.style.backgroundColor = "rgb(217, " + getRandomInt(188, 120)+ ", 46)";
  e.style.animation = "float " + setSpeed(e.style.width) + "s linear";
  e.style.animationDelay = getRandomFloat(0, 4) + "s";
  e.style.borderRadius = "100px";
  e.style.opacity = "0.95";

  return e;
}

function shakeUp() {
  bubbleTarget.removeChild(this);  
  this.style.width = getRandomInt(20, 40);
  this.style.height = this.style.width;
  this.style.backgroundColor = "rgb(217, " + getRandomInt(188, 120)+ ", 46)";;
  this.style.position = "absolute";  
  this.style.animationDuration = setSpeed(this.style.width) + "s";
  this.style.animationDelay = getRandomFloat(0, 2) + "s";
  this.style.left = getRandomFloat(10, 90) + "%";
  bubbleTarget.appendChild(this);
}

function setSpeed(sizeInit) {
  
  let size = parseInt(sizeInit, 10)
  if (size < 25) {
    speed = 2;
  } else if (size >= 25 && size < 30) {
    speed = 3;
  } else if (size >= 30 && size < 35) {
    speed = 4;
  } else {
    speed = 5;
  }
  return speed
}

function clear() {
  bubbleTarget.innerHTML = "";
  bubbleTarget.childNodes.forEach(element => morph.removeChild(element));
}

