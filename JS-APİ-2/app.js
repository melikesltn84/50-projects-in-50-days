function displayCountry(country) {
  const request = new XMLHttpRequest();

  request.open("GET", "https://restcountries.com/v3.1/name/" + country);
  request.send();

  request.addEventListener("load", function () {
    const data = JSON.parse(this.responseText);
    console.log(data);
    setCountry(data[0]);
  });
}

function setCountry(data) {
  const html = `
  <div class="col-4 ">
 <div class="card " style="width: 13rem;">
  <img src="${data.flags.png}" class="card-img-top" >
  <div class="card-body">
    <h5 class="card-title">${data.name.common}</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Population: ${(
          data.population / 1000000
        ).toFixed(1)}</li>
        <li class="list-group-item">Region: ${data.region}</li>
        <li class="list-group-item">Languages: ${Object.values(
          data.languages
        )}</li>
      </ul>
      
  </div>
</div>
</div>
 `;
  document
    .querySelector(".container .row")
    .insertAdjacentHTML("beforeend", html);
}
setTimeout(() => {
  displayCountry("turkey");
}, 1000);

setTimeout(() => {
  displayCountry("france");
}, 2000);

setTimeout(() => {
  displayCountry("usa");
}, 3000);
