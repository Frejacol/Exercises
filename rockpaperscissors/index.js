"use strict";

let computerChoice;
let playerChoice;

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

rockBtn.addEventListener("click", rockClicked);
function rockClicked() {
  makeChoice("rock");
}

paperBtn.addEventListener("click", paperClicked);
function paperClicked() {
  makeChoice("paper");
}

scissorsBtn.addEventListener("click", scissorsClicked);
function scissorsClicked() {
  makeChoice("scissors");
}

function makeChoice(choice) {
  playerChoice = choice;
  computerChoice = Math.ceil(Math.random() * 3);

  if (computerChoice === 1) {
    computerChoice = "rock";
  } else if (computerChoice === 2) {
    computerChoice = "paper";
  } else if (computerChoice === 3) {
    computerChoice = "scissors";
  }
  countDown();
}

function countDown() {
  player1.classList.add("shake");
  player2.classList.add("shake");
  player1.addEventListener("animationend", showChoice);
}

function showChoice() {
  player1.classList.remove("shake");
  player2.classList.remove("shake");

  player1.classList.remove("rock", "paper", "scissors");
  player2.classList.remove("rock", "paper", "scissors");

  player1.classList.add(playerChoice);
  player2.classList.add(computerChoice);

  showResult();
}

function showResult() {
  const beats = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (playerChoice === computerChoice) {
    document.getElementById("draw").classList.remove("hidden");
  } else if (beats[playerChoice] === computerChoice) {
    document.getElementById("win").classList.remove("hidden");
  } else {
    document.getElementById("lose").classList.remove("hidden");
  }
  setTimeout(hideResult, 1500);
}

function hideResult() {
  document.getElementById("win").classList.add("hidden");
  document.getElementById("lose").classList.add("hidden");
  document.getElementById("draw").classList.add("hidden");
}
