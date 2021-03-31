"use strict";

const calcNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

let secretNumber = calcNumber();

//State of our application
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayNumber = function (secretNmb) {
  document.querySelector(".number").textContent = secretNmb;
};

const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

const displayBackground = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};

const displayNumberWidth = function (width) {
  document.querySelector(".number").style.width = width;
};

document
  .querySelector(".check")
  .addEventListener(
    "click",
    function () //this function will be called sby JS as soon as click happens
    {
      const guess = Number(document.querySelector(".guess").value);
      //console.log(typeof guess, guess);

      //When there is no input
      if (!guess) {
        displayMessage("⛔️ No number");

        //When number is not between 1 and 20
      } else if (guess < 1 || guess > 20) {
        displayMessage("Enter valid number");

        //When player wins
      } else if (guess === secretNumber) {
        displayMessage("🎉 Correct Number!");
        displayNumber(secretNumber);
        displayBackground("#60b347");
        displayNumberWidth("30rem");

        if (score > highscore) {
          highscore = score;
          document.querySelector(".highscore").textContent = highscore;
        }
      }

      //When guess is wrong
      else if (guess !== secretNumber) {
        if (score > 1) {
          displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
          score--;
          displayScore(score);
        } else {
          displayMessage("💥 You lost the game!");
          displayScore(0);
        }
      }
    }
  );

//To play again
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = calcNumber();
  score = 20;

  displayScore(score);
  displayNumber("?");
  displayMessage("Start guessing..");
  document.querySelector(".guess").value = "";
  displayBackground("#222");
  displayNumberWidth("15rem");
});
