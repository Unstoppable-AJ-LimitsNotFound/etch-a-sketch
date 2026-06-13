const body = document.querySelector("body");
let container = document.querySelector("#container");

function makeGrid(numOfCellsInRow) {

    let totalNumOfCellsInGrid = numOfCellsInRow * numOfCellsInRow;

    for (let i = 0; i < totalNumOfCellsInGrid; i++) {
        const gridDiv = document.createElement("div");
        gridDiv.classList.add("gridDiv");
        let sideLengthOfCell = (400 / numOfCellsInRow);
        gridDiv.style.height = sideLengthOfCell + "px";
        gridDiv.style.width = sideLengthOfCell + "px";


        container.appendChild(gridDiv);
    }
}

function colorGrid(gridDiv) {
    gridDiv.style.backgroundColor = "red";
    btn5.classList.add("yellow");
}

let valueEntered;
function emptyGrid() {

    removeGrid();

    makeGrid(valueEntered);
}

function randomColorGrid(gridDiv) {

    let r, g, b;
    function randomColorGenerator() {
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
    }

    randomColorGenerator();
    gridDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    btn5.classList.add("yellow");
}

function progressivelyDarkenGrid(gridDiv) {

    let currentOpacity;

    gridDiv.style.backgroundColor = "red";

    if (gridDiv.style.opacity < 1) {
        currentOpacity = Number(gridDiv.style.opacity);
        gridDiv.style.opacity = (currentOpacity + 0.1);
    }
    btn5.classList.add("yellow");
}

function removeGrid() {
    container.remove();
    container = document.createElement("div");
    container.id = "container";

    body.appendChild(container);
}

let currentMode;

body.addEventListener("mouseover", (event) => {

    const cell = event.target;

    if (cell.classList.contains("gridDiv")) {
        if (currentMode === "singleColor") {
            colorGrid(cell);
        } else if (currentMode === "multiColor") {
            randomColorGrid(cell);
        } else if (currentMode === "darken") {
            progressivelyDarkenGrid(cell);
        }
    } else {
        return;
    }

});


//Execution flow
const btn1 = document.querySelector("#resize");
btn1.addEventListener("click", () => {

    let numOfCellsInRow = Number(prompt("Enter the number of cells you want in a row or column of the grid (<100): "));
    valueEntered = numOfCellsInRow;

    removeGrid();

    makeGrid(numOfCellsInRow);

    alert("Choose a mode and have FUN!!!");
});


const btn2 = document.querySelector("#singleColor");
btn2.addEventListener("click", () => {
    currentMode = "singleColor";
    buttonColorReset();
    btn2.style.backgroundColor = "greenyellow";
});

const btn3 = document.querySelector("#multiColor");
btn3.addEventListener("click", () => {
    currentMode = "multiColor";
    buttonColorReset();
    btn3.style.backgroundColor = "greenyellow";
});

const btn4 = document.querySelector("#darken");
btn4.addEventListener("click", () => {
    currentMode = "darken";
    buttonColorReset();
    btn4.style.backgroundColor = "greenyellow";
});

const btn5 = document.querySelector("#resketch");
btn5.addEventListener("click", () => {
    emptyGrid();
    btn5.classList.remove("yellow");
});


const buttons = [btn2, btn3, btn4];
function buttonColorReset() {
    buttons.forEach((button) => {
        if (button.style.backgroundColor === "greenyellow") {
            button.style.backgroundColor = "revert";
        }
    });
}