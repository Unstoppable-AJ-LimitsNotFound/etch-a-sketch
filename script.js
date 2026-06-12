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

    removeGrid();

    makeGrid(numOfCellsInRow);

    alert("Choose a mode and have FUN!!!");
});

const btn2 = document.querySelector("#singleColor");
btn2.addEventListener("click", () => colorGrid());

const btn3 = document.querySelector("#multiColor");
btn3.addEventListener("click", () => randomColorGrid());