//Search City//

function searchCity(city) {
  let apiKey = "b65081e7ee4a0cdd9c660f2d72c26136";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let location = document.querySelector("#location");
  location.innerHTML = `${searchInput.value}:`;
  searchCity(searchInput.value);
}
searchCity("Manchester");

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

//Weather Api//

function displayWeatherCondition(response) {
  let city = document.querySelector("#location");
  city.innerHTML = response.data.name;

  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temp");
  temperatureElement.innerHTML = `${temperature}`;

  let description = document.querySelector("#description");
  description.innerHTML = response.data.weather[0].description;

  let feelsLikeTemp = Math.round(response.data.main.feels_like);
  let feelsLike = document.querySelector("#feeling");
  feelsLike.innerHTML = `Feels Like: ${feelsLikeTemp}°C`;

  let windRounded = Math.round(response.data.wind.speed);
  let wind = document.querySelector("#wind");
  wind.innerHTML = `Wind: ${windRounded}mph`;
}

//Current Location//

function searchLocation(position) {
  let apiKey = "b65081e7ee4a0cdd9c660f2d72c26136";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}
let currentLocation = document.querySelector("#current-location");
currentLocation.addEventListener("click", getCurrentLocation);

//oC and oF//

function fahrenheit(event) {
  event.preventDefault();
  let tempoF = document.querySelector("#temp");
  tempoF.innerHTML = "⛅68";
}

function celsius(event) {
  event.preventDefault();
  let tempoC = document.querySelector("#temp");
  tempoC.innerHTML = "⛅20";
}
let fahrenheitTemp = document.querySelector("#fahrenheit");
fahrenheitTemp.addEventListener("click", fahrenheit);

let celsiusTemp = document.querySelector("#celsius");
celsiusTemp.addEventListener("click", celsius);

//Time and Date//

let now = new Date();

let date = document.querySelector(".date");

let dates = now.getDate();
let year = now.getFullYear();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];

date.innerHTML = `${day} ${dates} ${month} ${year}`;

let time = document.querySelector(".time");
let hour = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

time.innerHTML = `${hour}:${minutes}`;
