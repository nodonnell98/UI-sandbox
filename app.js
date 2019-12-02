var targetOne = document.getElementById("targetOne");
var targetTwo = document.getElementById("targetTwo");
var sectionTwo = document.getElementById("sectionTwo");
var sectionOne = document.getElementById("sectionOne");
var main = document.getElementsByClassName("main");
var flipped = document.getElementsByClassName("flipped");

var newColor;
var inverted;

targetOne.addEventListener("click", changeColor);
targetTwo.addEventListener("click", changeColor);

for (i = 0; i < main.length; i++) {
    main[i].addEventListener("mouseover", changeMouse);

    function changeMouse() {
        var pointer = document.getElementById("mouse");
        pointer.style.backgroundColor = inverted;


    }
}

for (i = 0; i < flipped.length; i++) {
    flipped[i].addEventListener("mouseover", changeMouse2);

    function changeMouse2() {
        var pointer = document.getElementById("mouse");
        pointer.style.backgroundColor = newColor;


    }
}





function changeColor() {
    newColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    inverted = invertColor(newColor)

    for (i = 0; i < main.length; i++) {
        main[i].style.backgroundColor = newColor;
        main[i].style.color = inverted;
    }

    for (i = 0; i < flipped.length; i++) {
        flipped[i].style.backgroundColor = inverted;
        flipped[i].style.color = newColor;
    }





}

function invertColor(hex) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    // invert color components
    var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
        g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
        b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
    // pad each with zeros and return
    return '#' + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}

//-----nav change-----//
$(function() {
    $(window).scroll(function () {
       if ($(this).scrollTop() > 890) {
          $('nav').addClass('changeColor')
          $('nav').removeClass('grey')
       }
       if ($(this).scrollTop() < 890) {
          $('nav').removeClass('changeColor')
          $('nav').addClass('grey')
       }
    });
 });


//---------------------------------MOUSE---------------------------------//

const root = document.querySelector('body')

// Real cursor element
const cursor = document.createElement('div')
cursor.setAttribute("id", "mouse");
cursor.classList.add('cursor')
root.appendChild(cursor)



root.addEventListener('mousemove', (e) => {
    setPosition(cursor, e)
})

function setPosition(element, e) {
    element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
}

//-------------------------------SHADOW------------------------------------------------//

// shim layer with setTimeout fallback
window.requestAnimFrame = (function () {
    return function (callback) {
        window.setTimeout(callback, 1000);
    };
})();

$(document).ready(function () {

    var $shadow = $('.shadow');
    var shadowLimit = 200;
    var moveEvent = ('ontouchstart' in document.documentElement) ? "touchmove" : "mousemove";

    (function animloop() {
        requestAnimFrame(animloop);

        $(window).bind(moveEvent, function (ev) {
            var $this = $(this);
            var w = $this.width();
            var h = $this.height();
            var center = {
                x: w / 4,
                y: h / 4
            };

            var evX = (moveEvent == 'touchmove') ? ev.originalEvent.touches[0].clientX : ev.clientX;
            var evY = (moveEvent == 'touchmove') ? ev.originalEvent.touches[0].clientY : ev.clientY;

            var shadowX = (center.x - evX) / 30;
            var shadowY = (center.y - evY) / 30;

            shadowX = (shadowX > shadowLimit) ? shadowLimit : shadowX;
            shadowX = (shadowX < shadowLimit * -1) ? shadowLimit * -1 : shadowX;
            shadowY = (shadowY > shadowLimit) ? shadowLimit : shadowY;
            shadowY = (shadowY < shadowLimit * -1) ? shadowLimit * -1 : shadowY;

            $shadow.css({
                textShadow: Math.ceil(shadowX) + 'px ' + Math.ceil(shadowY) + 'px ' + Math.abs(shadowX * shadowY) / 15 + 'px rgba(0,0,0,0.4)'
            });


        });
    })();


});