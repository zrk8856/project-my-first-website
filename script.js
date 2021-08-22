const dodger = document.getElementById("dodger");
const game = document.getElementById("game");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  function moveDodgerRight() {
      const leftNumbers = dodger.style.left.replace("px", "");
      const left = parseInt(leftNumbers, 10);
      if (left < 360) {
          dodger.style.left = `${left + 1}px`;
      }
  }

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
  });

dodger.addEventListener("click", function() {
    randomColor = Math.floor(Math.random()*16777215).toString(16);
    dodger.style.backgroundColor = "#" + randomColor;
}
)

game.addEventListener("dblclick", function() {
    randomColor = Math.floor(Math.random()*16777215).toString(16);
    game.style.backgroundColor = "#" + randomColor;
}
)