function generateRandomNumber() {
  return Math.ceil(Math.random() * 100);
}

document.querySelector(".number").textContent = generateRandomNumber();
