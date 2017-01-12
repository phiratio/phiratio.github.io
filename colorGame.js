/**
 * Created by Void-S on 12-Jan-17.
 */
var numSquares = 6;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = randomiseColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function () {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = randomiseColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
});

hardBtn.addEventListener("click", function () {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = randomiseColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
        }
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
});

resetButton.addEventListener("click",function () {
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = randomiseColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
});

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.background = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function () {
        //grab color of clicked square
        let clickedColor = this.style.background;
        //compare color to picked color
        if (clickedColor == pickedColor) {
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

function makeAllDivsSameColor(color) {
    //loop trough all squares
    for (let i = 0; i < squares.length; i++) {
        //change each color to match given color
        squares[i].style.background = color;
    }
}

function randomiseColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    let arr = [];
    //add num random colors to array
    for(let i = 0; i < num; i ++) {
        //get random color and push into arry
        arr.push(randomColorValueGenerator());
    }
    //return that array
    return arr;
}

function randomColorValueGenerator() {
    //pick a "red" from 0 to 255
    let r = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 to 255
    let g = Math.floor(Math.random() * 256);
    //pick a "green" from 0 to 255
    let b = Math.floor(Math.random() * 256);
    //"rgb(r, g, b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
}