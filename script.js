"use strict";

function displayMessage(mesaj) {
  return (document.querySelector(".message").textContent = mesaj);
}
function nrSecret(min, max) {
  return Math.trunc(Math.random() * max) + min;
}
let secretNumber = nrSecret(1, 20);
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //Cand n-ai input
  if (!guess) {
    displayMessage("No number");
  }
  // Cand e corect nr
  else if (guess === secretNumber) {
    displayMessage("Correct Number! 🎉");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  // Cand e gresit nr
  else if (guess !== secretNumber && score > 1) {
    displayMessage(
      guess > secretNumber
        ? `${guess} is too high! 📈`
        : `${guess} is too low 📉`
    );

    score--;
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = "";
  }

  //Cand scorul e 0 si pierzi
  else {
    document.querySelector(".score").textContent = 0;
    displayMessage("You lost the game");
    document.querySelector(".guess").value = "";
  }
});

//Buton AGAIN (reincepe jocul)
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = nrSecret(1, 20);
  score = 20;
  document.querySelector(".number").textContent = "?";
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
});
