const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const key = this.dataset.filter;
    const filteredArray = filters[key];
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    showTheseVehicles(filteredArray);
  });
});

const tbodyPointer = document.querySelector("tbody");

function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = "";
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type ? each.type : "-"}</td>
  <td>${each.fuel ? each.fuel : "-"}</td>
  <td>${each.passengers}</td> 
  <td>${each.stops ? each.stops.join(", ") : "-"}</td>
  <td>${each.ownedBy ? each.ownedBy : "-"}</td>
  <td>${each.isElectric ? "Yes" : "No"}</td>
  <td>${each.isTandem ? "Yes" : "No"}</td>
</tr>`;
  });
}

showTheseVehicles(vehicles);

function isElectric(vehicle) {
  return vehicle.isElectric === true;
}

const onlyElectric = vehicles.filter(isElectric);

function hasTwoSeatsOrMore(vehicle) {
  return vehicle.passengers > 2;
}
const onlyTwoSeatsOrMore = vehicles.filter(hasTwoSeatsOrMore);

function isElectricJonas(vehicle) {
  return vehicle.isElectric === true && vehicle.ownedBy === "Jonas";
}

const onlyElectricJonas = vehicles.filter(isElectricJonas);

function ryebreadTwoOrMore(vehicle) {
  return vehicle.fuel === "Rugbrød" && vehicle.passengers >= 2;
}
const onlyRyebreadTwoOrMore = vehicles.filter(ryebreadTwoOrMore);

const filters = {
  isElectric: onlyElectric,
  hasTwoSeatsOrMore: onlyTwoSeatsOrMore,
  isElectricJonas: onlyElectricJonas,
  ryebreadTwoOrMore: onlyRyebreadTwoOrMore,
  all: vehicles,
};
