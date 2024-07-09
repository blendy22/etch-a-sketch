let defaultColor = "black";
let defaultSize = 16;
let click = true;

function fillBoard(size) {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        
    let totalSize = size * size;    
    for (let i = 0; i < totalSize; i++) {
        let square = document.createElement("div");
        square.addEventListener("mouseover", squareColor);
        square.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend", square);
    }    
}

fillBoard(defaultSize);

function changeBoardSize(input) {
    if (input >= 2 && input <= 100) {
        document.querySelector(".error").style.display = "none";
        fillBoard(input);
    } else {
        document.querySelector(".error").style.display = "flex";
    }
}

function squareColor() {
    if (click) {
        if (defaultColor === "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; 
        } else {
            this.style.backgroundColor = defaultColor; 
        }
    }
}
function changeColor(colorOfChoice) {
    defaultColor = colorOfChoice;
}

function resetBoard() {
    let board = document.querySelector(".board");
    let squares = document.querySelectorAll("div");
    squares.forEach((div) => (div.style.backgroundColor = "white")); 
}

function toggleMessage() {
    let message = document.querySelector(".message");
    message.style = "display: flex; justify-content: center; margin: 5px;";
    if (click) {
        message.textContent = "Sketching is on!";
    } else {
        message.textContent = "Sketching is off!";
    } 
}

document.querySelector("body").addEventListener("click", (e) => {
    if (e.target.tagName != "BUTTON") {
        click = !click;
        toggleMessage();
    }
});

