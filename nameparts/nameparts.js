const fullName = "Freja Flinck Colsted";

const firstName = `${fullName.substring(0, fullName.indexOf(" "))}`;
const middleName = `${fullName.substring(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" "))}`;
const lastName = `${fullName.substring(fullName.lastIndexOf(" ") + 1)}`;

console.log(`First name: ${firstName}`);
console.log(`Middle name: ${middleName}`);
console.log(`Last name: ${lastName}`);

const longName = "Albus Percival Wulfric Brian Dumbledore";

const longFirstName = `${longName.substring(0, longName.indexOf(" "))}`;
const longMiddleName = `${longName.substring(longName.indexOf(" ") + 1, longName.lastIndexOf(" "))}`;
const longLastName = `${longName.substring(longName.lastIndexOf(" ") + 1)}`;

console.log(`First name: ${longFirstName}`);
console.log(`Middle name: ${longMiddleName}`);
console.log(`Last name: ${longLastName}`);
