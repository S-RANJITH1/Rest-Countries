const url = "https://restcountries.com/v3.1/all";

const container = document.createElement("div");
container.className = "container";
document.body.append(container);

const title = document.createElement("h1");
title.id = "title";
title.className = "text-center";
title.textContent = "Countries Information";
container.append(title);

const row = document.createElement("div");
row.className = "row";
container.append(row);

fetch(url)
  .then((data) => data.json())
  .then((countries) => {
    for (let i = 0; i < countries.length; i++) {
      const column = document.createElement("div");
      column.classList.add("col-lg-4", "col-md-4", "col-sm-6", "col-xl-4");
      row.append(column);

      const card = document.createElement("div");
      card.classList.add("card", "h-100");
      column.append(card);

      card.innerHTML = `<div class="card-header">${countries[i].name.common}</div>
        <img src="${countries[i].flags.png}" class="card-img-top" alt="...">
        <div class="card-body">
        <div class="card-text">Region: ${countries[i].region}</div>
        <div class="card-text">Native Name: ${countries[i].nn2}</div>
        <div class="card-text">Population: ${countries[i].population}</div>
        <div class="card-text">Capital: ${countries[i].capital}</div>
        <div class="card-text">Latlng: ${countries[i].latlng}</div>
        <div class="card-text">Country code: ${countries[i].cca3}</div>
        <button class="btn btn-primary" onclick="getWeatherData('${countries[i].name.common}', ${i})">Click for weather</button>
        <div class="weatherInfo weatherInfo-${i}"></div>
        </div>`;
    }
  });

