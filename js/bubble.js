
const bubbleGroup = document.getElementsByClassName('bubble');
var bubbleTarget = null;
let bubbleColour = null;

//----Get target function-----//
//This funtion gets the target themouse is hovering over, and if it ahs the class bubble then it sets 
// bubble target as that element.

function handler(ev) {
  var target = $(ev.target);
  var elId = target.attr('id');
  if( target.is(".bubble") ) {
     console.log(elId);
    bubbleTarget = document.getElementById(elId);
    bubbleColour = setColour(elId);
    console.log(bubbleColour);
  }
  }
  $(".bubble").mouseenter(handler);



for(let i = 0; i < bubbleGroup.length; i++){
  bubbleGroup[i].addEventListener("mouseenter", append);
  bubbleGroup[i].addEventListener("mouseleave", clear);
}

//These funcitons randomly generate a float or int respectivley

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

//This function appends bubbles to the bubble target

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

//This creates a bubble with set parameters.

function createBubble() {  
  let e = document.createElement("div");
  e.setAttribute("class", "bubble");
  e.style.width = getRandomInt(20, 40);;
  e.style.height = e.style.width;
  e.style.position = "absolute";
  e.style.top = "100px";

  e.style.backgroundColor = "rgb( " + (bubbleColour[0] +  getRandomInt(0, 30))+ ", " + (bubbleColour[1] + getRandomInt(0, 30))+ ", " + (bubbleColour[2] + getRandomInt(0,30))+ " )";
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

  this.style.backgroundColor = "rgb( " + (bubbleColour[0] +  getRandomInt(0, 30))+ ", " + (bubbleColour[1] + getRandomInt(0, 30))+ ", " + (bubbleColour[2] + getRandomInt(0,30))+ " )";
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
  bubbleTarget.childNodes.forEach(element => bubbleTarget.removeChild(element));
  bubbleTarget = null;
}

function setColour(id){
  let id0 = "#" + id;
    console.log($(id0).css( "background-color" ))
    var rgb = $(id0).css( "background-color" );

rgb = rgb.substring(4, rgb.length-1)
         .replace(/ /g, '')
         .split(',');

         let newR = 255 - parseInt(rgb[0]);
         let newG= 255 - parseInt(rgb[1]);
         let newB = 255 - parseInt(rgb[2]);

         rgb[0] = newR;
         rgb[1] = newG;
         rgb[2] = newB;

       

         return rgb;
}



