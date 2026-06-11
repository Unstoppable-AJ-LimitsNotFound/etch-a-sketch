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

function removeGrid() {
    container.remove();
    container = document.createElement("div");
    container.id = "container";

    body.appendChild(container);
}


//Execution flow
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    numOfCellsInRow = Number(prompt("Enter the number of cells you want in a row or column of the grid (<100): "));
    
    removeGrid();
    
    makeGrid(numOfCellsInRow);

    colorGrid();

});

