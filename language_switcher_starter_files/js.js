const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};
let locale = "da";

const languageSelector = document.getElementById("language-select");

languageSelector.addEventListener("change", function () {
  locale = languageSelector.value;
  changeLanguage();
});

function changeLanguage() {
  texts[locale].texts.forEach((text) => {
    document.querySelector(text.location).textContent = text.text;
  });
}

changeLanguage();
