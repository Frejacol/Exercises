function changeColor() {
  const currentFilter = document.querySelector("h1").dataset.filter;
  document.querySelector("h1").dataset.filter = currentFilter === "fox" ? "bat" : "fox";
}

document.querySelector("#change").addEventListener("click", changeColor);
