// script.js

const GRID_WIDTH = 800;
const gridContainer = document.querySelector(".grid-container");
const [gridSizeBtn, resetBtn] = document.querySelectorAll("button");
let gridSize = 0;

gridSizeBtn.addEventListener("click", () => {
  gridSize = popup();
  if (gridSize === 0) return;

  // const sideLength = Math.floor(GRID_WIDTH/gridSize);
  const sideLength = GRID_WIDTH/gridSize;

  gridContainer.replaceChildren();
  for (let i = 0; i < gridSize; i++) {
    const gridRow = createGridRow(gridSize, sideLength);
    gridContainer.append(gridRow);
  }
});

resetBtn.addEventListener("click", () => {
  if (gridSize === 0) return;
  
  const gridSquares = document.querySelectorAll(".grid-square");
  gridSquares.forEach((sqr) => {
    sqr.classList.remove("hovered");
  });
});

// Handles getting user input for number of squares. 
// Returns 0 representing user pressing the cancel button, or 1-100 inclusive.
function popup() {
  let input = prompt("Enter an integer betwen 1 and 100 (inclusive)");
  if (input === null) return 0; // if user presses cancel
  while (!Number.isInteger(+input) || +input < 1 || +input > 100) {
    input = prompt("Something went wrong!\n Enter an integer betwen 1 and 100 (inclusive)");
    if (input === null) return 0;
  }
  return +input;
}

// Returns grid row
function createGridRow(rowSize, sideLength) {
  const gridRow = document.createElement("div");
  gridRow.className = "grid-row";
  for (let i = 0; i < rowSize; i++) {
    const gridSquare = createGridSquare(sideLength);
    gridRow.append(gridSquare);
  }

  return gridRow;
}

// Returns grid square
function createGridSquare(sideLength) {
  const gridSquare = document.createElement("div");
  gridSquare.className = "grid-square";
  gridSquare.style.cssText = "width: " + sideLength + "px; height: " + sideLength + "px;";
  gridSquare.addEventListener("mouseover", () => {
    gridSquare.classList.add("hovered");
  });

  return gridSquare;
}