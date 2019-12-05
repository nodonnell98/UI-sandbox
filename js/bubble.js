const morph = document.getElementById("morph");
let morphChild = document.getElementsByClassName("bubble");

morph.addEventListener("mouseenter", append2);

morph.addEventListener("mouseleave", clear)


function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
  }

  function createBubble(){   

     let e = document.createElement("div");
     e.setAttribute("class", "bubble");
     e.style.width = getRandom(20, 40);;
     e.style.height = e.style.width;     
     e.style.position = "absolute";
     e.style.top = "100px";
     e.style.backgroundColor = "orangered";
    e.style.animation = "float " + setSpeed(e.style.width) + "s";
    e.style.animationDelay = getRandomFloat(0, 4) + "s";
    e.style.borderRadius = "100px";
    e.style.opacity = "0.7";

    return e;
  }

  function setSpeed(size){
      let speed = 1;
    if (size < 25){
        speed = 2;
     }
     else if(size >= 25 && size < 30){
         speed = 3;
     }
     else if(size >= 30 && size < 35){
        speed = 4;
    }
    else{
        speed = 5;
    }

    return speed
  }


  function append2(){
  var positionX = 10;    
  for(let i = 0; i < 6; i++){ 
        let bubble = createBubble();   
        positionX = getRandom(10, 90);
        bubble.style.left = positionX + "%";                
        morph.appendChild(bubble);   
        bubble.addEventListener("animationend", shakeUp);    
          }
    function shakeUp(){
      morph.removeChild(this);
      console.log("shake");
      let positionX = getRandom(10, 90);
      this.style.width = getRandom(20, 40);;
      this.style.height = this.style.width;     
      this.style.position = "absolute";
      this.style.top = "100px";
      this.style.backgroundColor = "orangered";
      this.style.animation = "float " + window.setSpeed(this.style.width) + "s";
      this.style.animationDelay = getRandomFloat(0, 2) + "s";
      this.style.left = positionX + "%";   
      morph.appendChild(this); 
       
    }
  }

  function clear(){
      morph.innerHTML = "";
      morph.childNodes.forEach(element => morph.removeChild(element));
      clearInterval(intervalVar);
      
      console.log(intervalVar);
  }
