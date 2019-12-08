
const bubbleGroup = document.getElementsByClassName('bubble');
var bubbleTarget = null;
let bubbleColour = null;
let targetHeight;
let targetWidth;
let maxSize;
let minSize;

//----Get target function-----//
//This funtion gets the target themouse is hovering over, and if it ahs the class bubble then it sets 
// bubble target as that element.

function handler(ev) {
  var target = $(ev.target);
  var elId = target.attr('id');
  if( target.is(".bubble") ) {
     
    bubbleTarget = document.getElementById(elId);
    let id = "#" + elId;
    bubbleColour = setColour(id);
    targetHeight = $(id).css("height");
    targetWidth = $(id).css("width");
    setSize();
    console.log(targetHeight, targetWidth);
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
  e.style.width = getRandomInt(minSize, maxSize);;
  e.style.height = e.style.width;
  e.style.position = "absolute";
  e.style.top = (parseInt(targetHeight, 10) + 50);

  e.style.backgroundColor = "rgb( " + (bubbleColour[0] +  getRandomInt(0, 50))+ ", " + (bubbleColour[1] + getRandomInt(0, 50))+ ", " + (bubbleColour[2] + getRandomInt(0,50))+ " )";
  e.style.animation = "float " + setSpeed(e.style.width) + "s linear";
  e.style.animationDelay = getRandomFloat(0, 4) + "s";
  e.style.borderRadius = "100px";
  e.style.opacity = "0.95";

  return e;
}

function shakeUp() {
  bubbleTarget.removeChild(this);  
  this.style.width = getRandomInt(minSize, maxSize);
  this.style.height = this.style.width;

  this.style.backgroundColor = "rgb( " + (bubbleColour[0] +  getRandomInt(0, 50))+ ", " + (bubbleColour[1] + getRandomInt(0, 50))+ ", " + (bubbleColour[2] + getRandomInt(0,50))+ " )";
  this.style.position = "absolute";  
  this.style.animationDuration = setSpeed(this.style.width) + "s";
  this.style.animationDelay = getRandomFloat(0, 2) + "s";
  this.style.left = getRandomFloat(10, 90) + "%";
  bubbleTarget.appendChild(this);
}

function setSize(){
  maxSize = parseInt(targetWidth, 10) * 0.12;
  minSize = parseInt(targetWidth,10) * 0.07;
}

function setSpeed(sizeInit) {
let diff = maxSize - minSize;
let increment = diff / 4;
let small = minSize + increment;
let medium = minSize + (increment*2);
let large = minSize + (increment*3);

let speedDiff = parseInt(targetHeight,10)/100;
console.log(speedDiff)
let xslow = (speedDiff*2) + 0.5;
let slow = speedDiff*3;
let fast = speedDiff*4;
let xfast = speedDiff*5

  let size = parseInt(sizeInit, 10)
  if (size < small) {
    speed = xslow;
  } else if (size >= small && size < medium) {
    speed = slow;
  } else if (size >= medium && size < large) {
    speed = fast;
  } else {
    speed = xfast;
  }
  return speed
}

function clear() {
  bubbleTarget.innerHTML = "";
  bubbleTarget.childNodes.forEach(element => bubbleTarget.removeChild(element));
  bubbleTarget = null;
}

function setColour(id){
  
    
    var rgb = $(id).css( "background-color" );

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



