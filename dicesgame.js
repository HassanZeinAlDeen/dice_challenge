window.onload = function () {
  var x = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  var y = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  console.log(x, y)
  //document.getElementById("n_1").innerHTML = x;
  //document.getElementById("n_2").innerHTML = y;
  var winner = document.querySelector(".game_title");
  dtrmnWinner(x, y);
  var first_dice = document.querySelectorAll(".dot1");
  var second_dice = document.querySelectorAll(".dot2");

  for (var i = 0; i < x; i++) {
    first_dice[i].style.background = "white";
  }

  for (var i = 0; i < y; i++) {
    second_dice[i].style.background = "white";
  }


  function dtrmnWinner(x, y) {
    if (x > y) {
      winner.textContent = "Player 1 Wins!"
    }
    else if (x == y) {
      winner.textContent = "Draw"
    }
    else {
      winner.textContent = "Player 2 Wins!"
    }
  }
}
