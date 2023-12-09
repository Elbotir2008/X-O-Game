let items = document.getElementsByClassName("item");
let result = document.getElementsByClassName("result");
let btn = document.querySelector("button");
let countClickItems = 0;
let vertikal = [
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];
let gorizontal = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];
let dropLine = [
  [0, 4, 8],
  [2, 4, 6],
];
for (let i = 0; i < items.length; i++) {
  btn.addEventListener("click", handleReset);
  function handleReset() {
    items[i].innerHTML = "";
    result[0].innerHTML = "";
    countClickItems = 0;
  }
  items[i].addEventListener("click", function itemClick() {
    function countItems() {
      if (countClickItems % 2 !== 0) {
        countClickItems++;
        items[i].innerHTML = "O";
        if (countClickItems == 9) {
          result[0].innerHTML = `${items[7].innerHTML} IS WIN!`;
        }
      } else {
        countClickItems++;
        if (countClickItems % 2 !== 0) {
          items[i].innerHTML = "X";
          if (countClickItems == 9) {
            result[0].innerHTML = `${items[8].innerHTML} IS WIN!`;
          }
        }
      }
    }
    countItems();
    function lastWinner() {
      for (let i = 0; i < gorizontal.length; i++) {
        if (
          items[gorizontal[i][0]].innerHTML === "X" &&
          items[gorizontal[i][1]].innerHTML === "X" &&
          items[gorizontal[i][2]].innerHTML === "X"
        ) {
          items[gorizontal[i][0]].classList.add("winner");
          items[gorizontal[i][1]].classList.add("winner");
          items[gorizontal[i][2]].classList.add("winner");
          result[0].innerHTML = "X is the winner!";
        } else if (
          items[gorizontal[i][0]].innerHTML === "O" &&
          items[gorizontal[i][1]].innerHTML === "O" &&
          items[gorizontal[i][2]].innerHTML === "O"
        ) {
          items[gorizontal[i][0]].classList.add("winner");
          items[gorizontal[i][1]].classList.add("winner");
          items[gorizontal[i][2]].classList.add("winner");
          result[0].innerHTML = "O is the winner!";
        }
      }

      for (let i = 0; i < vertikal.length; i++) {
        if (
          items[vertikal[i][0]].innerHTML === "X" &&
          items[vertikal[i][1]].innerHTML === "X" &&
          items[vertikal[i][2]].innerHTML === "X"
        ) {
          items[vertikal[i][0]].classList.add("winner");
          items[vertikal[i][1]].classList.add("winner");
          items[vertikal[i][2]].classList.add("winner");
          result[0].innerHTML = "X is the winner!";
        } else if (
          items[vertikal[i][0]].innerHTML === "O" &&
          items[vertikal[i][1]].innerHTML === "O" &&
          items[vertikal[i][2]].innerHTML === "O"
        ) {
          items[vertikal[i][0]].classList.add("winner");
          items[vertikal[i][1]].classList.add("winner");
          items[vertikal[i][2]].classList.add("winner");
          result[0].innerHTML = "O is the winner!";
        }
      }

      for (let i = 0; i < dropLine.length; i++) {
        if (
          items[dropLine[i][0]].innerHTML === "X" &&
          items[4].innerHTML === "X" &&
          items[dropLine[i][2]].innerHTML === "X"
        ) {
          items[dropLine[i][0]].classList.add("winner");
          items[4].classList.add("winner");
          items[dropLine[i][2]].classList.add("winner");
          result[0].innerHTML = "X is the winner!";
        } else if (
          items[dropLine[i][0]].innerHTML === "O" &&
          items[4].innerHTML === "O" &&
          items[dropLine[i][2]].innerHTML === "O"
        ) {
          items[dropLine[i][0]].classList.add("winner");
          items[4].classList.add("winner");
          items[dropLine[i][2]].classList.add("winner");
          result[0].innerHTML = "O is the winner!";
        }
      }
    }

    lastWinner();
  });
}
