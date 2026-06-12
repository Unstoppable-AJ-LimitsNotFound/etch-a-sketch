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

function colorGrid() {
    const gridDivs = document.querySelectorAll(".gridDiv");
    gridDivs.forEach((gridDiv) => {
        gridDiv.addEventListener("mouseenter", () => {
            gridDiv.classList.add("hovered");
        });
    });
}

let valueEntered;
function emptyGrid() {

    removeGrid();

    makeGrid(valueEntered);
}

function randomColorGrid() {

    let r, g, b;
    function randomColorGenerator() {
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
    }
    
    const gridDivs = document.querySelectorAll(".gridDiv");
    gridDivs.forEach((gridDiv) => {
        gridDiv.addEventListener("mouseenter", () => {
            randomColorGenerator();
            gridDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });
    });
}

function progressivelyDarkenGrid() {
    let sum = 0;
    const gridDivs = document.querySelectorAll(".gridDiv");
    gridDivs.forEach((gridDiv) => {
        gridDiv.addEventListener("mouseenter", () => {
            gridDiv.classList.add("hovered");

            if (sum < 100) {
                sum += 10;
            } else {
                sum = 0;
            }

            gridDiv.style.opacity = `${sum}%`;
        });
    });
}

function removeGrid() {
    container.remove();
    container = document.createElement("div");
    container.id = "container";

    body.appendChild(container);
}


//Execution flow
const btn1 = document.querySelector("#resize");
btn1.addEventListener("click", () => {
    numOfCellsInRow = Number(prompt("Enter the number of cells you want in a row or column of the grid (<100): "));
    valueEntered = numOfCellsInRow;

    removeGrid();

    makeGrid(numOfCellsInRow);

    alert("Choose a mode and have FUN!!!");

    btn2.style.backgroundColor = "revert";
    btn3.style.backgroundColor = "revert";
    btn4.style.backgroundColor = "revert";
});

const btn2 = document.querySelector("#singleColor");
btn2.addEventListener("click", () => {
    colorGrid();
    btn2.style.backgroundColor = "greenyellow";
    btn3.style.backgroundColor = "revert";
    btn4.style.backgroundColor = "revert";
});

const btn3 = document.querySelector("#multiColor");
btn3.addEventListener("click", () => {
    randomColorGrid();
    btn2.style.backgroundColor = "revert";
    btn3.style.backgroundColor = "greenyellow";
    btn4.style.backgroundColor = "revert";
});

const btn4 = document.querySelector("#darken");
btn4.addEventListener("click", () => {
    progressivelyDarkenGrid()
    btn2.style.backgroundColor = "revert";
    btn3.style.backgroundColor = "revert";
    btn4.style.backgroundColor = "greenyellow";
});

const btn5 = document.querySelector("#resketch");
btn5.addEventListener("click", () => emptyGrid());