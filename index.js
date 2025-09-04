function updatetime() {
  // Sydney
  let SydneyElement = document.querySelector("#sydney-aus");
  if (SydneyElement) {
    let SydneyDateElement = SydneyElement.querySelector(".date");
    let SydneyTimeElement = SydneyElement.querySelector(".time");
    let SydneyTime = moment.tz("Australia/Sydney");
    SydneyDateElement.innerHTML = SydneyTime.format("MMMM Do YYYY");
    SydneyTimeElement.innerHTML = SydneyTime.format("HH:mm:ss A");
  }

  // Tokyo
  let TokyoElement = document.querySelector("#tokyo-asia");
  if (TokyoElement) {
    let TokyoDateElement = TokyoElement.querySelector(".date");
    let TokyoTimeElement = TokyoElement.querySelector(".time");
    let TokyoTime = moment.tz("Asia/Tokyo");
    TokyoDateElement.innerHTML = TokyoTime.format("MMMM Do YYYY");
    TokyoTimeElement.innerHTML = TokyoTime.format("HH:mm:ss A");
  }
 
}

let intervalId = setInterval(updatetime, 1000);
updatetime();

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let citiesElement = document.querySelector("#cities");

  
 if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
 }
 
  // If "Select a City" is chosen → reset all cities
  if (!cityTimeZone) {
    clearInterval(intervalId);
    citiesElement.innerHTML = `
      <div class="city" id="sydney-aus">
          <h2>Sydney</h2>
          <div class="date"></div>
          <div class="time"></div>
      </div>
      <div class="city" id="tokyo-asia">
          <h2>Tokyo</h2>
          <div class="date"></div>
          <div class="time"></div>
      </div>
      <div class="city" id="samoa">
          <h2>Samoa</h2>
          <div class="date"></div>
          <div class="time"></div>
      </div>
    `;
    intervalId = setInterval(updatetime, 1000);
    updatetime();
    return;
  }


  // Otherwise, show only the selected city
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  function updateSingleCity() {
    let cityTime = moment.tz(cityTimeZone);
    citiesElement.innerHTML = `
      <div class="city">
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        <div class="time">${cityTime.format("HH:mm:ss A")}</div>
      </div>
    `;
  }

  clearInterval(intervalId);
  updateSingleCity();
  intervalId = setInterval(updateSingleCity, 1000);
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
