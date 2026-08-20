const moms = 0.75;
const beregn = document.getElementById("beregn");

beregn.addEventListener("click", BeregnMoms);

function BeregnMoms() {
  const beloeb = Number(document.getElementById("beloeb").value);
  document.querySelector("#result").textContent = "Uderegnet beløb: " + beloeb * moms;
}
