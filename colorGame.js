/**
 * Created by Void-S on 12-Jan-17.
 */
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

 function init() {
    //mode buttons event listeners
    setupModeButtons();
    setupSquares ();
    reset();
}

function setupModeButtons() {
    for (var z = 0; z < modeButtons.length; z++) {
        modeButtons[z].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        });
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        //add click listeners to squares
        squares[i].addEventListener("click", function () {
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to picked color
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play again?";
                makeAllDivsSameColor(clickedColor);
                h1.style.background = clickedColor;
            } else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        })
    }
}

resetButton.addEventListener("click", function () {
    reset();
});

function reset () {
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = randomiseColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
}

function makeAllDivsSameColor(color) {
    //loop trough all squares
    for (var i = 0; i < squares.length; i++) {
        //change each color to match given color
        squares[i].style.background = color;
    }
}

function randomiseColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = [];
    //add num random colors to array
    for (var i = 0; i < num; i++) {
        //get random color and push into arry
        arr.push(randomColorValueGenerator());
    }
    //return that array
    return arr;
}

function randomColorValueGenerator() {
    //pick a "red" from 0 to 255
    var r = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 to 255
    var g = Math.floor(Math.random() * 256);
    //pick a "green" from 0 to 255
    var b = Math.floor(Math.random() * 256);
    //"rgb(r, g, b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
}