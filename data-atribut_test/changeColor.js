function changeColor() {
  document.querySelector("h1").dataset.filter === "fox" ? (document.querySelector("h1").dataset.filter = "bat") : (document.querySelector("h1").dataset.filter = "fox");
}

document.querySelector("#change").addEventListener("click", changeColor);
