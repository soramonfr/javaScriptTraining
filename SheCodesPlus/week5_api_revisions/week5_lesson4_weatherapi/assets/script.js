// Challenge 1
console.log(axios);

// Challenge 2
let apiKey = "c3713b1bcebb5ce5f896fa8a7eec12ab";
// &APPID=c3713b1bcebb5ce5f896fa8a7eec12ab

// Challenge 3
function showTemperature(response) {
    console.log(response);
}

// By default, unit mesure is Kelvin so we have to set up the unit we want using &units=metric (celsius) or imperial (fahrenheit)
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=sydney&units=metric";
axios.get(`${apiUrl}&APPID=${apiKey}`).then(showTemperature);
