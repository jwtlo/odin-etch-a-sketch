// script.js

const GRID_WIDTH = 800;
const gridContainer = document.querySelector(".grid-container");
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  const num = popup();
  if (num === 0) return;
  
  const sqrWidth = Math.floor(GRID_WIDTH / num);
  const sqrWidthRem = GRID_WIDTH % num;
  
  gridContainer.replaceChildren();
  for (let i = 0; i < num * num; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.className = "grid-square";
    gridSquare.style.cssText = "width: " + sqrWidth + "px; height: " + sqrWidth + "px;";
    gridContainer.append(gridSquare);
  }
})

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

