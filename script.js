const dodger = document.getElementById("dodger");
const game = document.getElementById("game");

const showMe = document.createElement("button");
showMe.id = "show";
showMe.textContent = "Show Me!";
document.body.append(showMe);

const hideMe = document.createElement("button");
hideMe.id = "hide";
hideMe.textContent = "Hide Me!";
document.body.append(hideMe);


function moveDodgerUp() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);
    if(bottom < 380) {
        dodger.style.bottom = `${bottom + 1}px`;
    }
}

function moveDodgerDown() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);
    if (bottom > 0) {
        dodger.style.bottom = `${bottom - 1}px`;
    }
}

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
    if (e.key === "ArrowUp") {
        moveDodgerUp();
    } else if (e.key === "ArrowDown") {
        moveDodgerDown();
    } else if (e.key === "ArrowLeft") {
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

showMe.addEventListener("click", function() {
    document.getElementById("game").style.display = "block";
}
)

hideMe.addEventListener("click", function() {
    document.getElementById("game").style.display = "none";
}
)