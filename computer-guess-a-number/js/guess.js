"use strict";

const startButton = document.querySelector(".start");
const correctButton = document.querySelector(".correct");
const higherButton = document.querySelector(".higher");
const lowerButton = document.querySelector(".lower");

let min = 1;
let max = 100;
let currentGuess;
let guessCount = 0;

startButton.addEventListener("click", startGame);

function makeGuess() {
  currentGuess = Math.floor((min + max) / 2);
  document.querySelector(".computerGuess").textContent = "I guess your number is " + currentGuess;
  guessCount = guessCount + 1;
}

function startGame() {
  min = 1;
  max = 100;
  guessCount = 0;
  startButton.classList.add("hidden");
  correctButton.classList.remove("hidden");
  higherButton.classList.remove("hidden");
  lowerButton.classList.remove("hidden");
  makeGuess();
}

higherButton.addEventListener("click", function () {
  min = currentGuess + 1;
  makeGuess();
});

lowerButton.addEventListener("click", function () {
  max = currentGuess - 1;
  makeGuess();
});

correctButton.addEventListener("click", function () {
  document.querySelector(".computerGuess").textContent = "I guessed your number in " + guessCount + " tries!";
  correctButton.classList.add("hidden");
  higherButton.classList.add("hidden");
  lowerButton.classList.add("hidden");
});
