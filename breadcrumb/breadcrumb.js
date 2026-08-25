const btn = document.querySelector("button");
const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

btn.addEventListener("click", addBreadcrumb);

function addBreadcrumb() {
  const ul = document.querySelector("ul");
  ul.innerHTML = generateBreadcrumb();
}

function generateBreadcrumb() {
  let breadcrumb = "";
  bc.forEach((item, index) => {
    if (index === bc.length - 1) {
      breadcrumb += `<li>${item.name}</li>`;
    } else {
      breadcrumb += `<li><a href="${item.link}">${item.name}</a></li>`;
    }
  });

  return breadcrumb;
}
