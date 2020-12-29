// Challenge 1
console.log(axios);

// Challenge 2
let apiKey = "c3713b1bcebb5ce5f896fa8a7eec12ab";
// &APPID=c3713b1bcebb5ce5f896fa8a7eec12ab

// Challenge 3 & 4 & 5
let city = "Sydney";
function showTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    console.log(temperature);
    let h1 = document.querySelector("h1");
    h1.innerHTML = `It is 🌡${temperature} celsius degrees in ${city}!`;
}

// First get url API and call it via axios
// By default, unit mesure is Kelvin so we have to set up the unit we want using &units=metric (celsius) or imperial (fahrenheit)
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
axios.get(`${apiUrl}&APPID=${apiKey}`).then(showTemperature);

// Challenge 5
// let h1 = document.querySelector("h1");
// h1.innerHTML = `It is 🌡${temperature} celsius degrees in Sydney!`;