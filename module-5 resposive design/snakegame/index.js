const grid = document.querySelector(".grid");

let startbtn = document.querySelector("#button");
let playerScore = document.querySelector("#score");

let squares = [];
let currentSnake = [2, 1, 0];
let direction = 1;
width = 10;
function createGrid() {
  for (let i = 0; i < 100; i++) {
    const square = document.createElement("div");

    square.classList.add("square");

    grid.appendChild(square);
    squares.push(square);
  }
}

createGrid();

currentSnake.forEach((index) => squares[index].classList.add("snake"));

function move() {
  if (
    (currentSnake[0] % width == 0 && direction === -1) ||
    (currentSnake[0] % width == width - 1 && direction === 1) ||
    (currentSnake[0] + width >= width * width && direction === width) ||
    (currentSnake[0] - width < 0 && direction === -width) ||
    squares[currentSnake[0] + direction].classList.contains("snake")
  ) {
    return clearInterval(timerId);
  }

  let rm = currentSnake.pop();

  squares[rm].classList.remove("snake");

  currentSnake.unshift(currentSnake[0] + direction);

  squares[currentSnake[0]].classList.add("snake");
}

let timerId = setInterval(move, 1000);

// let timerId = console.log(currentSnake);

// keycode
// 39 for right arrow
// 38 is for up arrow

function control(e) {
  if (e.key == "ArrowRight") {
    console.log("right pressed");
    direction = 1;
  } else if (e.key == "ArrowUp") {
    console.log("up pressed");
    direction = -width;
  } else if (e.key == "ArrowLeft") {
    console.log("left pressed");
    direction = -1;
  } else if (e.key == "ArrowDown") {
    console.log("down pressed");
    direction = +width;
  }
}

document.addEventListener("keyup", control);
