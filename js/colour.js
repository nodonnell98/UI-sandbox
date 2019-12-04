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