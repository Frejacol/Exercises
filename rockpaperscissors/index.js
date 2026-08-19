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
  playerChoice = "rock";
  makeChoice();
}

paperBtn.addEventListener("click", paperClicked);
function paperClicked() {
  playerChoice = "paper";
  makeChoice();
}

scissorsBtn.addEventListener("click", scissorsClicked);
function scissorsClicked() {
  playerChoice = "scissors";
  makeChoice();
}

function makeChoice() {
  computerChoice = "scissors";
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
  console.log("Player chose: ", playerChoice);
  console.log("Computer chose: ", computerChoice);
}
