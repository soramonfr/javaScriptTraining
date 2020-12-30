// Feature #1 - In your project, display the current date and time using JavaScript
let now = new Date();

// Day display
let currentDay = document.querySelector("#current-day");
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
currentDay.innerHTML = days[now.getDay()];

// Hour display
let currentHour = document.querySelector("#current-hour");
let hours = now.getHours();
let minutes = now.getMinutes();

if (hours < 10) {
    hours = `0${hours}`;
}
if (minutes < 10) {
    minutes = `0${minutes}`;
}

currentHour.innerHTML = `${hours}:${minutes}`;

// Feature #2 - Add a search engine, when searching for a city (i.e. Paris), display the city name on the page after the user submits the form.

function cityDisplay(event) {
    event.preventDefault();
    let cityInput = document.querySelector("#city-input");
    let cityName = document.querySelector("#city-name");
    cityName.innerHTML = `${cityInput.value}`;
}

let formSubmit = document.querySelector("form");
formSubmit.addEventListener("submit", cityDisplay);

// Feature #3 (bonus)- Display a fake temperature (i.e 17) in Celsius and add a link to convert it to Fahrenheit. When clicking on it, it should convert the temperature to Fahrenheit. When clicking on Celsius, it should convert it back to Celsius.
let temperature = 17;
let temperatureValue = document.querySelector("#current-temperature");

// Celsius display
function displayDegree(event) {
    event.preventDefault();
    let celsiusValue = Math.round(temperature);
    temperatureValue.innerHTML = `${celsiusValue}`;
}

let degreeTemperature = document.querySelector("#degree-temperature");
degreeTemperature.addEventListener("click", displayDegree);

// Fahrenheit display
function displayFahrenheit(event) {
    event.preventDefault();
    let fahrenheitValue = Math.round(temperature * 9 / 5) + 32;
    temperatureValue.innerHTML = `${fahrenheitValue}`;
}

let fahrenheitTemperature = document.querySelector("#fahrenheit-temperature");
fahrenheitTemperature.addEventListener("click", displayFahrenheit);

// New challenge, using API: On your project, when a user searches for a city (example: New York), it should display the name of the city on the result page and the current temperature of the city.

// Show the temperature & the city
function showTemperature(response) {
    let apiTemperature = Math.round(response.data.main.temp);
    let cityDisplay = document.querySelector("#city-name");
    let temperatureDisplay = document.querySelector("#current-temperature");
    cityDisplay.innerHTML = `${apiCity}`;
    temperatureDisplay.innerHTML = `${apiTemperature}`;    
}

// Get the data
let apiCity = document.querySelector("#city-input");
let apiUnit = "metric";
let apiKey = "c3713b1bcebb5ce5f896fa8a7eec12ab";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${apiCity}&units=${apiUnit}&appid=${apiKey}`;
axios.get(apiUrl).then(showTemperature);