// Feature #1 - In your project, display the current date and time using JavaScript
// id="current-day" (span)
// id="current-hour" (span)
// id="city-input" (h2)

let now = new Date();
let currentDay = document.querySelector("#current-day");
currentDay.innerHTML = now.getDay();

// now.getMinutes();
// now.getHours();
// now.getDay();

// Feature #2 - Add a search engine, when searching for a city (i.e. Paris), display the city name on the page after the user submits the form. 

// Feature #3 - Display a fake temperature (i.e 17) in Celsius and add a link to convert it to Fahrenheit. When clicking on it, it should convert the temperature to Fahrenheit. When clicking on Celsius, it should convert it back to Celsius.