let items = document.getElementsByClassName("item");
let result = document.getElementsByClassName("result");
let btn = document.querySelector("button");
let countClickItems = 0;
for (let i = 0; i < items.length; i++) {
  btn.addEventListener("click", handleReset);
  function handleReset() {
    items[i].innerHTML = "";
    result[0].innerHTML = "";
  }
  items[i].addEventListener("click", function itemClick() {
    function countItems() {
      if (countClickItems % 2 !== 0) {
        countClickItems++;
        items[i].innerHTML = "O";
        console.log(items[i]);
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
    // function whoWinner() {
    //   if (countClickItems % 2 !== 0) {
    //     for (let j = 3; j < countClickItems; j++) {
    //       //   console.log(j);
    //       items[j].classList.add("winner");
    //     }
    //   }
    //   if (countClickItems % 2 == 0) {
    //     for (let a = 3; a < countClickItems; a++) {
    //       //   console.log(a);
    //       items[a].classList.add("winner");
    //     }
    //   }
    // }
    // whoWinner();
  });
}
