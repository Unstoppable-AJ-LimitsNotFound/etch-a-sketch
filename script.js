const container = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.classList.add("gridDiv");

    container.appendChild(gridDiv);
}

const gridDivs = document.querySelectorAll(".gridDiv");
gridDivs.forEach((gridDiv) => {
    gridDiv.addEventListener("mouseenter", () => {
        gridDiv.classList.add("hovered");
    });
});