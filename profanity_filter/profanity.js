"use strict";

const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

let SFW = false;
const modal = document.querySelector("dialog");
const closeModal = document.querySelector("#close");

function removeBadWords() {
  let text = document.querySelector("p").textContent;

  if (SFW === true) {
    modal.showModal();
  } else {
    curseWords.forEach(function (word) {
      text = text.replace(word.bad, `<span class="good">${word.good}</span>`);
    });

    document.querySelector("p").innerHTML = text;
    SFW = true;
  }
}

document.querySelector("#sfw").addEventListener("click", removeBadWords);

closeModal.addEventListener("click", () => {
  modal.close();
});
