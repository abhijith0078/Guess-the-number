"use strict";

const inputEl = document.querySelector("#input-id");
const checkEl = document.querySelector(".check");
const messageEL = document.querySelector(".message");
const secretNumberBox = document.querySelector(".secret-number__box");
const scoreEl = document.querySelector(".score__box");
const highScoreEl = document.querySelector(".high-score__box");
const newGame = document.querySelector(".new-game");

const lowLimit = 1;
const maxLimit = 30;
let secretNumber = Math.floor(Math.random() * maxLimit) + 1;
console.log(secretNumber);

let highScore = 0;

let score = 20;

scoreEl.textContent = score;
highScoreEl.textContent = highScore;

checkEl.addEventListener("click", function () {
  const notEqual = function () {
    if (userInput > secretNumber && userInput <= maxLimit) {
      messageEL.textContent = "Too high ...";
    } else if (userInput < secretNumber && userInput >= lowLimit) {
      messageEL.textContent = "Too low ...";
    } else {
      document.querySelector(".container").style.backgroundColor = "red";
      messageEL.textContent = "Not with in the range...";
    }
  };

  let userInput = Number(inputEl.value);
  console.log(
    ` inside check user input ${userInput} and secret number ${secretNumber}`
  );
  document.querySelector(".container").style.backgroundColor =
    "var(--bg-color)";
  if (userInput === 0) {
    messageEL.textContent = "Not in the range...";
    document.querySelector(".container").style.backgroundColor = "red";
  } else if (!userInput) {
    document.querySelector(".container").style.backgroundColor = "red";
    messageEL.textContent = "Provide an input😤";
  } else if (userInput === secretNumber) {
    secretNumberBox.classList.toggle("pline");
    secretNumberBox.textContent = secretNumber;
    console.log("passed");
    messageEL.textContent = "Great 👏👏👏";

    document.querySelector(".container").style.backgroundColor = "green";
    checkEl.disabled = true;

    if (score >= highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
    }
    return;
  } else {
    notEqual();
  }

  inputEl.value = "";
  score -= 1;
  scoreEl.textContent = score;
  if (score < 1) {
    document.querySelector(".container").style.backgroundColor = "red";
    messageEL.textContent = "You loose";
    checkEl.disabled = true;
    return;
  }
});

newGame.addEventListener("click", function () {
  checkEl.disabled = false;
  score = 20;
  scoreEl.textContent = score;
  inputEl.value = "";
  secretNumber = Math.floor(Math.random() * maxLimit) + 1;
  console.log(`secretNumber after reset ${secretNumber}`);
  document.querySelector(".container").style.backgroundColor =
    "var(--bg-color)";
  secretNumberBox.classList.toggle("pline");
  secretNumberBox.textContent = "?";
});
