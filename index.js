function updatetime() {
  // London Data
  let LondonElement = document.querySelector("#london-eur");
  if (LondonElement) {
    let LondonDateElement = LondonElement.querySelector(".date");
    let LondonTimeElement = LondonElement.querySelector(".time");
    let LondonTime = moment.tz("Europe/London");

    LondonDateElement.innerHTML = LondonTime.format("MMMM Do YYYY");
    LondonTimeElement.innerHTML = LondonTime.format("HH:mm:ss [<small>]a[</small>]"

    );
  }

  // Sydney Data
  let SydneyElement = document.querySelector("#sydney-aus");
  if (SydneyElement) {
    let SydneyDateElement = SydneyElement.querySelector("#syd-date");
    let SydneyTimeElement = SydneyElement.querySelector("#syd-time");
    let SydneyTime = moment.tz("Australia/Sydney");

    SydneyDateElement.innerHTML = SydneyTime.format(" MMMM Do YYYY");
    SydneyTimeElement.innerHTML = SydneyTime.format("HH:mm:ss [<small>]a[</small>]"

    );
  }

  // Tokyo Data
  let TokyoElement = document.querySelector("#tokyo-asia");
  if (TokyoElement) {
    let TokyoDateElement = TokyoElement.querySelector("#tok-date");
    let TokyoTimeElement = TokyoElement.querySelector("#tok-time");
    let TokyoTime = moment.tz("Asia/Tokyo");

    TokyoDateElement.innerHTML = TokyoTime.format("MMMM Do YYYY ");
    TokyoTimeElement.innerHTML = TokyoTime.format("HH:mm:ss [<small>]a[</small>]"

    );
  }

  // Paris Data
  let ParisElement = document.querySelector("#paris-france");
  if (ParisElement) {
    let ParisDateElement = ParisElement.querySelector("#par-date");
    let ParisTimeElement = ParisElement.querySelector("#par-time");
    let ParisTime = moment.tz("Europe/Paris");

    ParisDateElement.innerHTML = ParisTime.format("MMMM Do YYYY");
    ParisTimeElement.innerHTML = ParisTime.format("HH:mm:ss [<small>]a[</small>]"

    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;

  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment.tz(cityTimeZone);

  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]"

      )} 
        <small>${cityTime.format("a")}</small>
      </div>
    </div>
  `;
}

updatetime();
setInterval(updatetime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
