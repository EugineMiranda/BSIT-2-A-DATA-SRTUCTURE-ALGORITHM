
var squres = document.getElementsByClassName("squre");
var colorDisplay = document.getElementById("color-display");
var result = document.getElementById("result");
var header = document.getElementById("header");
var playAgain = document.getElementById("play-again");
var nextColor = document.getElementById("next-color");
var colors = [];


genrateColor();
function genrateColor() {
    var i;
    for(i=0;i<squres.length;i++) {
        colors.push(
            `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
        );
    }
}
asignColor();
function asignColor() {
    var i;
    for(i=0;i<squres.length;i++){
        squres[i].style.backgroundColor = colors[i];
        squres[i].setAttribute("data-color",colors[i]);
    }
}
var pickedColor = getrandomColor();
function getrandomColor() {
    var randomColor = colors[Math.floor(Math.random()*squres.length)];
    colorDisplay.innerText = randomColor;
    return randomColor;
}



checkColor();
function checkColor() {
    var i,j;
    for(i=0;i<squres.length;i++) {
        squres[i].onclick = function() {
            var getColor = this.getAttribute("data-color");
            if(getColor == pickedColor)
            {
                for(j=0;j<squres.length;j++) {
                    squres[j].style.opacity = "1";
                    squres[j].style.backgroundColor = pickedColor;
                }playAgain.innerHTML = "Play Again";
                header.style.background = pickedColor;
                result.innerText = "Correct";
            }
            else{
                result.innerText = "Wrong";
                this.classList.add("fade");
            }
        }
    }
}

nextColor.onclick = function(){
    reset();
}

playAgain.onclick = function(){
    reset();
}

function reset() {
    window.location = location.href;
}