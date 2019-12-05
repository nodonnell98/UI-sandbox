const morph = document.getElementById("morph");
var intervalVar;
morph.addEventListener("mouseover", interval);
morph.addEventListener("mouseleave", remove)


function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }


  function createBubble(){
     let e = document.createElement("div");
     e.style.width = getRandom(20, 40);;
     e.style.height = e.style.width;
     e.style.position = "absolute";
     e.style.top = "100px";
     e.style.backgroundColor = "orangered";
    e.style.animation = "float " + getRandom(2, 4) + "s";
    e.style.borderRadius = "100px";
    e.style.opacity = "0.7";

    return e;
  }

  function append(){    
      var positionX = 10;
    for(let i = 0; i < 4; i++){   
        let bubble = createBubble();   
        positionX += getRandom(40, 90);
        bubble.style.left = positionX + "px";        
        morph.appendChild(bubble);
    }    
  }

  function interval(){
    intervalVar = setInterval(append2, 2000);
  }

  function append2(){
  var positionX = 10;
    for(let i = 0; i < 6; i++){   
        let bubble = createBubble();   
        positionX = getRandom(40, 490);
        bubble.style.left = positionX + "px";        
        morph.appendChild(bubble);
    }    
  }

  function remove(){
      morph.innerHTML = "";
      clearInterval(intervalVar);
  }