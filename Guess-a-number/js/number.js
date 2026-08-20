"use strict";

function generateRandomNumber() {
  return Math.ceil(Math.random() * 100);
}

let secretNumber = generateRandomNumber();

function checkGuess() {
  let guess = Number(document.querySelector(".guess-input").value);
  let helpText = document.querySelector(".helpText");

  helpText.classList.remove("start-text", "too-high", "too-low", "correct");

  void helpText.offsetWidth;

  if (secretNumber > guess) {
    document.querySelector(".helpText").textContent = "The number is too low";
    helpText.classList.add("too-low");
  } else if (secretNumber < guess) {
    document.querySelector(".helpText").textContent = "The number is too high";
    helpText.classList.add("too-high");
  } else if (secretNumber === guess) {
    document.querySelector(".helpText").textContent = "You guessed correct! 🎉";
    helpText.classList.add("correct");
  }
}

document.querySelector(".guess").addEventListener("click", checkGuess);
