const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset-btn");
const msgContainer = document.querySelector(".msg-container");
const msg = document.querySelector("#msg");
const newGameBtn = document.querySelector("#new-btn");

let turn0 = true; // player X,   player Y ;

const winPattern = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]];

const resetGame = () => {
  turn0 = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

// for new start Game
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

// for only first winner
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const showWinner = (winner) => {
  msg.innerText = `winner ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner ", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("box was clicked.");
    if (turn0) {
      box.innerText = "0";
      turn0 = false;
    } else {
      box.innerText = "x";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);
