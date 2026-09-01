const themeSelector = document.getElementById("theme-switcher");

themeSelector.addEventListener("change", function () {
  document.querySelector("body").dataset.theme = themeSelector.value;
});
