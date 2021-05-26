var n1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomDiceImage = "dice" + n1 + ".png"; //dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var n2 = Math.floor(Math.random() * 6) + 1; //1-6
var randomImageSource2 = "images/dice" + n2 + ".png"; //images/dice1.png - images/dice6.png
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//If player 1 wins
if (n1 > n2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
// If player 2 wins
else if (n2 > n1) {
  document.querySelector("h1").innerHTML = "🚩 Player 2 Wins! ";
}
// If it gets draw
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
