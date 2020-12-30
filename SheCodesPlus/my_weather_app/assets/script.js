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


// // Feature #3 (bonus)- Display a fake temperature (i.e 17) in Celsius and add a link to convert it to Fahrenheit. When clicking on it, it should convert the temperature to Fahrenheit. When clicking on Celsius, it should convert it back to Celsius.
// let temperature = 17;
// let temperatureValue = document.querySelector("#current-temperature");

// // Celsius display
// function displayDegree(event) {
//     event.preventDefault();
//     let celsiusValue = Math.round(temperature);
//     temperatureValue.innerHTML = `${celsiusValue}`;
// }

// let degreeTemperature = document.querySelector("#degree-temperature");
// degreeTemperature.addEventListener("click", displayDegree);

// // Fahrenheit display
// function displayFahrenheit(event) {
//     event.preventDefault();
//     let fahrenheitValue = Math.round(temperature * 9 / 5) + 32;
//     temperatureValue.innerHTML = `${fahrenheitValue}`;
// }

// let fahrenheitTemperature = document.querySelector("#fahrenheit-temperature");
// fahrenheitTemperature.addEventListener("click", displayFahrenheit);

// Using API: When a user searches for a city (example: New York), it should display the name of the city on the result page and the current temperature of the city.

// Display the current temperature of the city, via the API.
function showTemperature(response) {
    let apiTemperature = Math.round(response.data.main.temp);
    let temperatureDisplay = document.querySelector("#current-temperature");
    temperatureDisplay.innerHTML = `${apiTemperature}`;
}

// When searching for a city, display the city name on the page after the user submits the form.
function cityDisplay(event) {
    event.preventDefault();
    // Get the data
    let cityInput = document.querySelector("#city-input");
    let cityName = document.querySelector("#city-name");
    cityName.innerHTML = `${cityInput.value}`;
    let apiUnit = "metric";
    let apiKey = "c3713b1bcebb5ce5f896fa8a7eec12ab";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=${apiUnit}&appid=${apiKey}`;
    axios.get(apiUrl).then(showTemperature);
}

// Form submission
let formSubmit = document.querySelector("form");
formSubmit.addEventListener("submit", cityDisplay);