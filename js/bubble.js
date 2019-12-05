const morph = document.getElementById("morph");
let morphChild = document.getElementsByClassName("bubble");

morph.addEventListener("mouseenter", append);
morph.addEventListener("mouseleave", clear)


function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function createBubble() {

  let e = document.createElement("div");
  e.setAttribute("class", "bubble");
  e.style.width = getRandomInt(20, 40);;
  e.style.height = e.style.width;
  e.style.position = "absolute";
  e.style.top = "100px";
  e.style.backgroundColor = "orangered";
  e.style.animation = "float " + setSpeed(e.style.width) + "s linear";
  e.style.animationDelay = getRandomFloat(0, 4) + "s";
  e.style.borderRadius = "100px";
  e.style.opacity = "0.7";

  return e;
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


function append() {
  var positionX = 10;
  for (let i = 0; i < 6; i++) {
    let bubble = createBubble();
    positionX = getRandomFloat(10, 90);
    bubble.style.left = positionX + "%";
    morph.appendChild(bubble);
    bubble.addEventListener("animationend", shakeUp);
  }  
}

function shakeUp() {
  morph.removeChild(this);  
  this.style.width = getRandomInt(20, 40);
  console.log(this.style.width);
  this.style.height = this.style.width;
  this.style.position = "absolute";  
  this.style.animationDuration = setSpeed(this.style.width) + "s";
  console.log(this.style.animationDuration);
  this.style.animationDelay = getRandomFloat(0, 2) + "s";
  this.style.left = getRandomFloat(10, 90) + "%";
  morph.appendChild(this);

}

function clear() {
  morph.innerHTML = "";
  morph.childNodes.forEach(element => morph.removeChild(element));
  clearInterval(intervalVar);

  console.log(intervalVar);
}