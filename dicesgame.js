window.onload = function () {
  document.addEventListener("load", Function)
  var x = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  var y = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  document.getElementById("n_1").innerHTML = x;
  document.getElementById("n_2").innerHTML = y;
  var winner = document.querySelector(".game_title");
  dtrmnWinner(x, y);


  function dtrmnWinner(x, y) {
    if (x > y) {
      winner.textContent = "Player 1 Wins"
    }
    else if (x == y) {
      winner.textContent = "Draw"
    }
    else {
      winner.textContent = "Player 2 Wins"
    }
  }
}
