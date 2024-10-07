const response = await fetch("/pieces-autos.json");

let data = await response.json(response);

let newdata = null;
let filterData = null;

const fiche = document.querySelector(".fiches");

const renderTab = (data) => {
  //remise a Zéro
  fiche.innerHTML = "";
  data.forEach((pc) => {
    let card = document.createElement("div");
    card.className = "card p-2";
    card.style.width = "200px";
    let title = document.createElement("p");
    title.className = "card-title";

    let price = document.createElement("p");
    let desc = document.createElement("p");
    let img = document.createElement("img");
    img.src = pc.image;

    fiche.appendChild(card);
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(desc);
    title.innerHTML = `${pc.nom}`;
    price.innerHTML = ` prix : ${pc.prix} €`;
    desc.innerHTML = `${pc.description}`;
  });
};

// filtrer
const filterTitle = document.querySelector(".filtres > h3");

const croissant = document.querySelector("#croissant");
croissant.addEventListener("click", () => {
  if (filterData !== null) {
    newdata = filterData;
  } else {
    newdata = data;
  }

  filterData = newdata.sort((a, b) => {
    return a.prix - b.prix;
  });
  renderTab(filterData);
});
const decroissant = document.querySelector("#decroissant");
decroissant.addEventListener("click", () => {
  if (filterData !== null) {
    newdata = filterData;
  } else {
    newdata = data;
  }
  filterData = newdata.sort((a, b) => {
    return b.prix - a.prix;
  });
  renderTab(filterData);
});

const description = document.querySelector("#descrition");
description.addEventListener("click", () => {
  if (filterData !== null) {
    newdata = filterData;
  } else {
    newdata = data;
  }
  filterData = newdata.filter((el) => el.description !== undefined);
  renderTab(filterData);
});
const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  renderTab(data);
  console.log("sal");
});

//first render
renderTab(data);
