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
$(".bubble").mouseenter(handler);

function handler(ev) {
  var target = $(ev.target);
  var elId = target.attr('id');
  if (target.is(".bubble")) {

    bubbleTarget = document.getElementById(elId);
    let id = "#" + elId;
    bubbleColour = setColour(id);
    targetHeight = $(id).css("height");
    targetWidth = $(id).css("width");
    setSize();

  }
}



for (let i = 0; i < bubbleGroup.length; i++) {
  bubbleGroup[i].addEventListener("mouseenter", append);
  bubbleGroup[i].addEventListener("mouseleave", clear);
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
//This function clears the bubble target of all bubbles on mouseleave
function clear() {
  bubbleTarget = null;
  $('.bubbleItem', this).remove();
}

//This creates a bubble with set parameters.

function createBubble() {
  let e = document.createElement("div");
  e.setAttribute("class", "bubbleItem");
  e.style.width = getRandomInt(minSize, maxSize);;
  e.style.height = e.style.width;
  e.style.position = "absolute";
  e.style.top = (parseInt(targetHeight, 10) + 15);
  e.style.zIndex = -1;
  try{
  e.style.backgroundColor = "gold"/*"rgb( " + (bubbleColour[0] + getRandomInt(0, 50)) + ", " + (bubbleColour[1] + getRandomInt(0, 50)) + ", " + (bubbleColour[2] + getRandomInt(0, 50)) + " )";*/
  }
  catch{
    e.style.backgroundColor = "black";
  }
  e.style.animation = "float " + setSpeed(e.style.width) + "s linear";
  e.style.animationDelay = getRandomFloat(0, 4) + "s";
  e.style.borderRadius = "100px";
  e.style.opacity = "0.95";

  return e;
}

// This function ranomises the bubbles, giving them new features

function shakeUp() {
  bubbleTarget.removeChild(this);
  this.style.width = getRandomInt(minSize, maxSize);
  this.style.height = this.style.width;
  this.style.backgroundColor = "gold" /*"rgb( " + (bubbleColour[0] + getRandomInt(0, 50)) + ", " + (bubbleColour[1] + getRandomInt(0, 50)) + ", " + (bubbleColour[2] + getRandomInt(0, 50)) + " )";*/
  this.style.position = "absolute";
  this.style.animationDuration = setSpeed(this.style.width) + "s";
  this.style.animationDelay = getRandomFloat(0, 2) + "s";
  this.style.left = getRandomFloat(10, 90) + "%";
  bubbleTarget.appendChild(this);
}

// This function sets the max and min size of the bubbles based on the size of the target.

function setSize() {
  if(parseInt(targetWidth, 10) <=  100){
  maxSize = parseInt(targetWidth, 10) * 0.25;
  minSize = parseInt(targetWidth, 10) * 0.15;
  }
  else if((parseInt(targetWidth, 10) >  100) && ((parseInt(targetHeight, 10) <=  300))){
    maxSize = parseInt(targetWidth, 10) * 0.12;
    minSize = parseInt(targetWidth, 10) * 0.07;
  } 
  else if((parseInt(targetWidth, 10) >  200) && ((parseInt(targetHeight, 10) > 300))){
    maxSize = parseInt(targetWidth, 10) * 0.24;
    minSize = parseInt(targetWidth, 10) * 0.10;
  }
}

function setSpeed(sizeInit) {
  let mod = 0;
  let test = false;
  
  if (parseInt(targetHeight, 10) > 200){
    test = true;
    mod = -7.5;
  }

  let diff = maxSize - minSize;
  let increment = diff / 4;
  let small = minSize + increment;
  let medium = minSize + (increment * 2);
  let large = minSize + (increment * 3);

  let speedDiff = parseInt(targetHeight, 10) / 100;

  let xslow = (speedDiff * 3);
  let slow = speedDiff * 3.5;
  let fast = speedDiff * 4;
  let xfast = speedDiff * 4.5

  let size = parseInt(sizeInit, 10)
  if (size < small) {
    speed = xslow + mod;
  } else if (size >= small && size < medium) {
    speed = slow + mod;
  } else if (size >= medium && size < large) {
    speed = fast + mod;
  } else {
    speed = xfast + mod;
  }

  return speed
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


function setColour(id) {


  var rgb = $(id).css("background-color");
  console.log(rgb);
  rgb = rgb.substring(4, rgb.length - 1)
    .replace(/ /g, '')
    .split(',');

  let newR = 255 - parseInt(rgb[0]);
  let newG = 255 - parseInt(rgb[1]);
  let newB = 255 - parseInt(rgb[2]);

  rgb[0] = newR;
  rgb[1] = newG;
  rgb[2] = newB;



  return rgb;
}